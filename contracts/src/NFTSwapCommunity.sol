// SPDX-License-Identifier: UNLICENSED

import "openzeppelin-contracts/contracts/interfaces/IERC721.sol";
import "openzeppelin-contracts/contracts/interfaces/IERC20.sol";
import "openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol";
import "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";

pragma solidity ^0.8.10;

contract NFTSwapCommunity {
    
    using ECDSA for bytes32;
    using SafeERC20 for IERC20;
    
    enum TradeType {
        NFTxNFT
    }
    
    struct NFTTrade {
        address tokenContract;
        address srcUser;
        address dstUser;
        uint256 srcTokenNum;
        uint256 dstTokenNum;
        uint256 issueTime;
        uint256 expiry;
        TradeType typ;
        uint256 nonce;
    }

    event Swapped(bytes32 tradeHash, address token, address from, uint256 fromId, address to, uint256 toId);
    event Cancelled(bytes32 tradeHash, address token, NFTTrade trade);

    IERC721 NFTContract;
    uint256 maxExpiry;
    
    mapping (bytes32 => bool) finalizedTrades;
    mapping (bytes32 => bool) cancelledTrades;
    
    constructor(IERC721 _token, uint256 _maxExpiry) {
        NFTContract = _token;
        maxExpiry = _maxExpiry;
    }
    
    function swapAuth(bytes32 _hash, address _account, bytes memory _sig) pure internal returns (bool) {
        
        address account;
        ECDSA.RecoverError err;
        
        (account, err) = _hash.toEthSignedMessageHash().tryRecover(_sig);
        
        if (err != ECDSA.RecoverError.NoError) {
            return false;
        }
        
        if (account != _account) {
            return false;
        }
        
        return true;
    }
    
    function tradeValidation(NFTTrade memory _trade, bytes memory _sig) view internal returns (bytes32) {
        
        require(_trade.tokenContract == address(NFTContract));
        require(_trade.issueTime <= block.timestamp && _trade.expiry - _trade.issueTime <= maxExpiry, "Trade expiration invalid");
        require(_trade.expiry != 0 && block.timestamp <= _trade.expiry, "Trade expired");
        require(_trade.dstUser == msg.sender || _trade.dstUser == address(0), "Caller is not target of trade.");
        
        bytes32 hash = keccak256(abi.encode(_trade));
        
        require(!finalizedTrades[hash], "Trade already finalized");
        require(!cancelledTrades[hash], "Trade cancelled");
        
        require(swapAuth(hash, _trade.srcUser, _sig), "Invalid signature for trade.");
        
        return hash;
    }
    
    function SwapNFTxNFT(NFTTrade memory _trade, bytes memory _sig) external {
        
        require(_trade.typ == TradeType.NFTxNFT, "Incorrect trade type");
        
        bytes32 hash = tradeValidation(_trade, _sig);
        
        NFTContract.safeTransferFrom(_trade.srcUser, _trade.dstUser, _trade.srcTokenNum);
        NFTContract.safeTransferFrom(_trade.dstUser, _trade.srcUser, _trade.dstTokenNum);
        
        finalizedTrades[hash] = true;

        emit Swapped(hash, address(NFTContract), _trade.srcUser, _trade.srcTokenNum, _trade.dstUser, _trade.dstTokenNum);
    }
    
    function CancelTrade(NFTTrade memory _trade) external {
        
        require(_trade.srcUser == msg.sender, "Caller is not authorized to cancel this trade.");
        
        bytes32 hash = keccak256(abi.encode(_trade));
            
        cancelledTrades[hash] = true;
        emit Cancelled(hash, address(NFTContract), _trade);
    }
    
}

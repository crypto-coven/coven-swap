// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "ds-test/test.sol";
import "src/NFTSwapCommunity.sol";
import "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol";

interface CheatCodes {
    function prank(address) external;
    function sign(uint256 privateKey, bytes32 digest) external returns (uint8 v, bytes32 r, bytes32 s);
    function stopPrank() external;
}

contract CommunityNFT is ERC721 {

    uint256 lastTokenId = 0;

    constructor() ERC721("CommunityNFT", "CNFT") {}

    function mintNFT(address target) public returns (uint256) {

        lastTokenId = lastTokenId + 1;
        _mint(target, lastTokenId);

        return lastTokenId;
    }
}

contract NFTSwapCommunityTest is DSTest {

    using ECDSA for bytes32;
    CheatCodes constant cheats = CheatCodes(HEVM_ADDRESS);

    function setUp() public {}

    function testNFTSwapCommunity() public {

        uint256 userAkey = 0x6252a431cc9414621066ad5b9e453071abe0d93e83d7834e7f210b9c5b6b8732;
        //uint256 userBkey = 0x046851db85d24de0e49b0af1cf7287b15d69bf6d02ed8af1ddf86c6cdcbe885a;

        address userA = 0x1bF4fC36cB1AFC26980D8cc711cA44b95C400E66;
        address userB = 0xD58EC6832711D951d3f17960a3ed61792dbb9a4f;

        CommunityNFT NFTContract = new CommunityNFT();
        NFTSwapCommunity CommunitySwap = new NFTSwapCommunity(NFTContract, 60*60*24*7);

        uint256 userAToken = NFTContract.mintNFT(userA);
        uint256 userBToken = NFTContract.mintNFT(userB);

        cheats.prank(userA);
        NFTContract.setApprovalForAll(address(CommunitySwap), true);
        cheats.stopPrank();
        cheats.prank(userB);
        NFTContract.setApprovalForAll(address(CommunitySwap), true);
        cheats.stopPrank();

        NFTSwapCommunity.NFTTrade memory trade;
        trade.tokenContract = address(NFTContract);
        trade.srcUser = userA;
        trade.dstUser = userB;
        trade.srcTokenNum = userAToken;
        trade.dstTokenNum = userBToken;
        trade.issueTime = block.timestamp;
        trade.expiry = block.timestamp + 100;
        trade.typ = NFTSwapCommunity.TradeType.NFTxNFT;
        trade.nonce = 1;

        bytes32 hash = keccak256(abi.encode(trade));
        bytes32 msgHash = hash.toEthSignedMessageHash();

        (uint8 v, bytes32 r, bytes32 s) = cheats.sign(userAkey, msgHash);

        cheats.prank(userB);
        CommunitySwap.SwapNFTxNFT(trade, abi.encodePacked(r, s, v));
        cheats.stopPrank();
    }
}

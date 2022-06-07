import { EthereumNetwork } from '../config/types';

export const messageToSign = `Please sign this message to connect to Coven Swap!`;

export const testNetwork: EthereumNetwork = {
    chainId: '4',
    networkName: 'Rinkeby',
};

export const mainNetwork: EthereumNetwork = {
    chainId: '1',
    networkName: 'Ethereum Mainnet',
};

export const ENV = {
    DESKTOP: 'desktop',
    MOBILE: 'mobile',
    METAMASK_MOBILE: 'metamask_mobile',
};

export const rinkebyEtherscanTxUri = `https://rinkeby.etherscan.io/tx/`;
export const mainnetEtherscanTxUri = `https://etherscan.io/tx/`;

export enum DeployEnvironment {
    prod = 'prod',
    dev = 'dev',
}

export type EthereumNetwork = {
    chainId: string;
    networkName: string;
};

export enum StatusType {
    none,
    success,
    warn,
    error,
}

export type Status = {
    statusMessage: React.ReactElement | null;
    statusType: StatusType;
};

export type NetworkAndEtherscanUri = {
    network: EthereumNetwork;
    etherscanUri: string;
};

export type WalletResponse = {
    status: React.ReactElement | null;
    type: StatusType;
    address?: string;
};

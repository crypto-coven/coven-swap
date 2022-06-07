import { Contract, Signer, BigNumber, ethers } from 'ethers';
import {
    testNetwork,
    mainNetwork,
    mainnetEtherscanTxUri,
    rinkebyEtherscanTxUri,
} from './constants';
import { DeployEnvironment, EthereumNetwork } from '../config/types';
import contractABI from '../contract-abi.json';
import { Web3Provider } from '@ethersproject/providers';
import axios from 'axios';
import { Status, StatusType } from '../config/types';
import { backOff } from 'exponential-backoff';

declare let window: any;

let provider: Web3Provider;
let contract: Contract;
let signer: Signer;
let contractAddress: string;
let etherscanTxUri: string;
let ethereumNetwork: EthereumNetwork;

export const fetchContract = async () => {
    if (!provider || !contract || !signer) {
        const result = await backOff(() =>
            axios.get(`${window.location.origin}/api/constants`)
        );
        const resultData = result.data.data;
        [ethereumNetwork, etherscanTxUri] = determineNetworkAndEtherscanUri(
            resultData.deployEnvironment
        );
        contractAddress = resultData.contractAddress;
        provider = new ethers.providers.Web3Provider(window.ethereum);
        contract = new ethers.Contract(contractAddress, contractABI, provider);
        signer = provider.getSigner();
    }
};

export const fetchNetworkAndEtherscanUri = async (): Promise<
    [EthereumNetwork, string]
> => {
    const result = await backOff(() =>
        axios.get(`${window.location.origin}/api/constants`)
    );
    return determineNetworkAndEtherscanUri(result.data.data.deployEnvironment);
};

export const determineNetworkAndEtherscanUri = (
    deployEnvironment: DeployEnvironment
): [EthereumNetwork, string] => {
    const isProdEnvironment = deployEnvironment === DeployEnvironment.prod;
    const ethereumNetwork = isProdEnvironment ? mainNetwork : testNetwork;
    const etherscanTxUri = isProdEnvironment
        ? mainnetEtherscanTxUri
        : rinkebyEtherscanTxUri;
    return [ethereumNetwork, etherscanTxUri];
};

export const installMetamask = {
    address: '',
    type: StatusType.warn,
    status: (
        <span>
            You must install{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href={`https://metamask.io/download.html`}
            >
                Metamask
            </a>
            , a virtual Ethereum wallet, in your browser.
        </span>
    ),
};

export const connectWallet = async () => {
    if (window.ethereum) {
        if (window.ethereum.networkVersion !== ethereumNetwork.chainId) {
            return {
                type: StatusType.warn,
                status: (
                    <p>
                        You are not on the {ethereumNetwork.networkName}{' '}
                        network. Please connect to the{' '}
                        {ethereumNetwork.networkName} to proceed.
                    </p>
                ),
            };
        }
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            const publicAddress = addressArray[0];
            return {
                type: StatusType.success,
                address: publicAddress,
                status: null,
            };
        } catch (err) {
            return {
                type: StatusType.error,
                address: '',
                status: (
                    <p className="text-left">
                        😥 Something went wrong, please try again.{' '}
                    </p>
                ),
            };
        }
    } else {
        return installMetamask;
    }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    type: StatusType.success,
                    status: null,
                };
            } else {
                return {
                    address: '',
                    type: StatusType.none,
                    status: null,
                };
            }
        } catch (err) {
            return {
                type: StatusType.error,
                address: '',
                status: (
                    <p className="text-left">
                        😥 Wallet connect unsuccessful, please try again{' '}
                    </p>
                ),
            };
        }
    } else {
        return installMetamask;
    }
};

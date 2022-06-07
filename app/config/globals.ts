export const globals = {
    NODE_PORT: process.env.NODE_PORT ?? '8888',
    NODE_ENV: process.env.NODE_ENV ?? 'dev',
    DYNAMODB_TABLE_NAME:
        process.env.NFT_SWAP_DYNAMODB_TABLE_NAME ?? 'nftswap-dev',
    // Vercel requires these keys to be renamed https://vercel.com/support/articles/how-can-i-use-aws-sdk-environment-variables-on-vercel
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID_APP ?? '',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY_APP ?? '',
    AWS_REGION: process.env.AWS_REGION_APP ?? 'ap-southeast-1',
    DEPLOY_ENV: process.env.DEPLOY_ENV ?? 'dev',
    NFT_SWAP_CONTRACT_ADDRESS:
        process.env.NFT_SWAP_CONTRACT_ADDRESS ??
        '0xa131AD247055FD2e2aA8b156A11bdEc81b9eAD95',
        NFT_SWAP_PRIVATE_KEY: process.env.NFT_SWAP_PRIVATE_KEY ?? '',
    NFT_SWAP_NFT_TITLE: process.env.NFT_SWAP_NFT_TITLE ?? 'Coven Swap',
    NFT_SWAP_NFT_EDITION: process.env.NFT_SWAP__NFT_EDITION ?? 'Genesis',
    QUANTITY: process.env.QUANTITY ?? 1000,
    IMAGE_ASSET: process.env.IMAGE_ASSET ?? 'genesis_nfts.png',
};

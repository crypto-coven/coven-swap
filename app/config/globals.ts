export const globals = {
    NODE_PORT: process.env.NODE_PORT ?? '8888',
    NODE_ENV: process.env.NODE_ENV ?? 'dev',
    DEPLOY_ENV: process.env.DEPLOY_ENV ?? 'dev',
    CRYPTO_COVEN_CONTRACT_ADDRESS:
        process.env.CRYPTO_COVEN_CONTRACT_ADDRESS ?? '0x558c4A2b4927f67d843C6eC7319FbE83a32a178E',
    NFT_SWAP_CONTRACT_ADDRESS:
        process.env.NFT_SWAP_CONTRACT_ADDRESS ??
        '0xa131AD247055FD2e2aA8b156A11bdEc81b9eAD95',
        NFT_SWAP_PRIVATE_KEY: process.env.NFT_SWAP_PRIVATE_KEY ?? '',
    NFT_SWAP_NFT_TITLE: process.env.NFT_SWAP_NFT_TITLE ?? 'Coven Swap',
    NFT_SWAP_NFT_EDITION: process.env.NFT_SWAP__NFT_EDITION ?? 'Genesis',
    QUANTITY: process.env.QUANTITY ?? 1000,
    IMAGE_ASSET: process.env.IMAGE_ASSET ?? 'genesis_nfts.png',
};

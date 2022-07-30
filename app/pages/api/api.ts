// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL = 'https://testnets-api.opensea.io/api/v1/';
const cc_contract_address_testnet = "0x558c4a2b4927f67d843c6ec7319fbe83a32a178e";

// export async function getWitchCount(address: String) {
//   const response = await fetch(
//     API_URL +  'collections?asset_owner=' + String(address) + '&offset=0&limit=300')
//   let data = await response.json();
//   var cc_metadata = null;
//   for (let i = 0; i < data.length; i++) {
//     let cur = data[i];
//     if (cur['primary_asset_contracts'][0]["address"] == cc_contract_address_testnet) {
//       cc_metadata = data[i];
//       break;
//     }
//   }

//   console.log(cc_metadata);
//   return await cc_metadata['owned_asset_count']

// }
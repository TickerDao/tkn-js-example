// Import viem transport, viem chain, and ENSjs
import { http } from 'viem'
import { mainnet } from 'viem/chains'
import { createEnsPublicClient } from '@ensdomains/ensjs'
import { getTextRecord } from '@ensdomains/ensjs/public'

(async () => {
  const client = createEnsPublicClient({ chain: mainnet, transport: http(), })

  const token = 'link';
  const records = await client.getRecords({
    name: `${token}.tkn.eth`,
    coins: ['ETH', 'SOL', 'OP', 'ARB1', 'AVAXC', 'BNB', 'CRO', 'FTM', 'GNO', 'MATIC', 'NEAR', 'TRX', 'ZIL', 'BASE'],
    texts: [
      'name', // Project name
      'description', // Project description
      'avatar', // Logo image URL
      'url', // Main website URL
      'notice', // Token data change notification
      'decimals', // Number of decimals token can be divided by
      'com.twitter', // Twitter handle
      'com.github', // GitHub organization name
      'com.discord', // Discord server invite string
      'version', // Metadata versioning identifier
      // Upcoming datapoints placeholders
      'tokenSupply', // Total number of tokens created
      'circulatingSupply', // Total number of tokens in circulation
      'chainID', // Chain id if the token represents an EVM network
      'coinType', // Coin type if the coin represents a non EVM network
      'forum', // Project's forum URL
      'governance', // Onchain voting interface URL
      'snapshot', // Off-chain voting interface URL
      'abi', // ABI interface for the token contract
      'git', // Source code URL
      'governanceContract', // Governance contract address
      'canonicalDexPool', // Primary DEX pool URL
    ],
    contentHash: true
  })

  console.log(`Data for $${token}:`, records)
  // records.texts: 
  // (Returns array of addresses)
  // [{id: 60, name: 'eth', value: '0x514910771AF9Ca656af840dff83E8264EcF986CA'}]

  // records.coins
  // (Returns array of data)
  // [{key: 'name', value: 'Chainlink'}, {key: 'url', value: 'https://chain.link/'}]

  // records.contentHash
  // (Returns dWeb IPFS CID)
  // 'bafybeibeyaoc7y4nvoleq5x3mo3o4a4jazhvrogu236indpzhqkzbaxowu'
})();

// Import viem transport, viem chain, and ENSjs
import { http } from 'viem'
import { mainnet } from 'viem/chains'
import { createEnsPublicClient } from '@ensdomains/ensjs'
import { getTextRecord } from '@ensdomains/ensjs/public'


(async () => {
  // Create the client
  const client = createEnsPublicClient({
    chain: mainnet,
    transport: http(),
  })

  // Use the client
  const ethAddress = await client.getAddressRecord({ name: 'wbtc.tkn.eth' })

  const records = await client.getRecords({
    name: 'wbtc.tkn.eth',
    records: {
      coins: ['ETH', 'SOL', 'OP', 'ARB', 'AVAXC', 'BNB', 'CRO', 'FTM', 'GNO', 'MATIC', 'GOERLI', 'SEPOLIA', 'NEAR', 'TRX', 'ZIL'],
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
    },
  })
  const result = await getTextRecord(client, {
    name: 'wbtc.tkn.eth',
    key: 'com.twitter',
  })

  console.log(records)
})();

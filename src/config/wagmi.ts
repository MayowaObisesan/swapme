import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, base } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

export const metadata = {
    name: 'SwapMe',
    description: 'SwapMe is a project for easy swapping of your tokens using walletConnect AppKit and 1inch',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [mainnet, base] as const
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    auth: {
        email: true, // default to true
        socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
        showWallets: true, // default to true
        walletFeatures: true // default to true
    },
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    }),
})
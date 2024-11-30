import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { cookieStorage, createStorage, http } from 'wagmi';

import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'noreturn',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    sepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
  transports: {
    [sepolia.id]: http('https://sepolia.gateway.tenderly.co'),
    [mainnet.id]: http(),
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: false,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
});
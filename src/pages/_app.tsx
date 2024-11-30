import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider  } from '@rainbow-me/rainbowkit';
import { darkTheme } from '@rainbow-me/rainbowkit';
import { config } from '../wagmi';



const AppDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={AppDark}>
      <CssBaseline></CssBaseline>
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider theme={darkTheme()}>
         
          <Component {...pageProps} />
          
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider></ThemeProvider>
  );
}

export default MyApp;

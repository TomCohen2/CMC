import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import {CoinMarketProvider} from '../context/context'


function MyApp({ Component, pageProps }: AppProps) {
  const serverUrl="https://0sm230tr4apo.usemoralis.com:2053/server";
  const appId="wGiTr9Nr3XLMFPuctk7prlbiE3mpgn4A5vIjYKix";
  
  return (
        <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <CoinMarketProvider>
  <Component {...pageProps} />
  </CoinMarketProvider>
  
    </MoralisProvider>)
}

export default MyApp

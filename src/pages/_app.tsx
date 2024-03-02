import "@/styles/globals.css";
import { Suspense } from "react";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import type { AppProps } from "next/app";

import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc, bscTestnet } from "wagmi/chains";
import { GoogleAnalytics } from "nextjs-google-analytics";

import ErrorBoundary from "@/components/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Get projectID from Infura
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}

const chains = [bsc, bscTestnet];

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const monument = localFont({
  src: [
    {
      path: "../../public/monument/MonumentExtended-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/monument/MonumentExtended-Ultrabold.otf",
      weight: "700",
    },
  ],
  variable: "--font-monument",
});
const inter = Inter({
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --poppins-font: ${poppins.style.fontFamily};
            --font-monument: ${monument.style.fontFamily};
          }
        `}
      </style>

      <WagmiConfig config={wagmiConfig}>
        <ErrorBoundary>
          <Suspense fallback={"Loading"}>
            <Component {...pageProps} />
          </Suspense>
        </ErrorBoundary>
      </WagmiConfig>

      <Web3Modal
        themeMode="dark"
        explorerRecommendedWalletIds={['6b2e623f231f3794db2fcb7cfff2d1cc1d902bff70d946980d62956cd880cacc']}
        explorerExcludedWalletIds={[]}
        projectId={projectId}
        ethereumClient={ethereumClient}
      />
      <ToastContainer autoClose={1500} />
    </>
  );
}

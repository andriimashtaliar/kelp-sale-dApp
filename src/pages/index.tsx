import { useEffect, useState } from "react";

import Head from "next/head";

import useKelpPrice from "@/hooks/useKelpPrice";
import useBNBPrice from "@/hooks/useBNBPrice";

import { useAccount, useBalance, useSwitchNetwork } from "wagmi";

import "react-toastify/dist/ReactToastify.css";

import { Address } from "@/utils/types";
import BuyKelp from "@/components/BuyKelp";

import PurchaseIllustration from "@/assets/illustrations/Purchase";
import Header from "@/components/Header";
import Footer from "@/components/common/Footer";
import ConnectButton from "@/components/Header/ConnectButton/Button";

const BUSD_ADDRESS = process.env.NEXT_PUBLIC_BUSD_ADDRESS as Address;
const activeChainId = process.env.NEXT_PUBLIC_CHAIN_ID;


const Purchase = () => {
  const { address } = useAccount();
  const [domLoaded, setDomLoaded] = useState(false);
  const { switchNetwork } = useSwitchNetwork({
    chainId: Number(activeChainId),
  });

  const { kelpPrice } = useKelpPrice();

  const { data: bnbPrice } = useBNBPrice();
  const { data: bnbBalance } = useBalance({
    address,
    chainId: Number(activeChainId),
  });

  const { data: busdBalance } = useBalance({
    address,
    chainId: Number(activeChainId),
    token: BUSD_ADDRESS,
    watch: false,
  });

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (switchNetwork) {
      switchNetwork();
    }
  }, [switchNetwork]);

  return (
    <> {domLoaded && (
      <>
        <Head>
          <title>Kelp Presale</title>
          <meta
            name="application-name"
            content="Kelp Presale dApp"
          />
          <meta
            name="description"
            content="Kelp Presale dApp"
          />
        </Head>
        <Header />
        <main className="relative grid place-content-center py-24 gap-y-14 px-3 sm:px-4 md:px-0 min-h-screen">
          <h1 className="text-2xl text-center md:text-3xl font-poppins uppercase font-semibold ">
            Purchase Kelp
          </h1>
          {address ? (
            <BuyKelp
              bnbPrice={bnbPrice}
              kelpPrice={kelpPrice}
              bnbBalance={bnbBalance}
              busdBalance={busdBalance}
            />
          ) : (
            <>
              <div className="space-y-4 place-self-center">
                <PurchaseIllustration className="h-52 md:h-56 w-52 md:w-56" />
                <p className="mx-auto text-neutral-600 text-center text-lg w-40 ">
                  Connect a wallet to continue
                </p>
              </div>
              <ConnectButton />
            </>
          )}
        </main>
        <Footer />
      </>
    )}
    </>
  );
};

export default Purchase;

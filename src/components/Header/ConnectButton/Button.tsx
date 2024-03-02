import React, { useState } from "react";

import 'viem/window';

import { useWeb3Modal, } from "@web3modal/react";
import { useAccount, useEnsName } from "wagmi";
import { disconnect } from "@wagmi/core";

import * as Popover from "@radix-ui/react-popover";

import { shortenHex } from "@/utils/util";
import {
  KELP_TOKEN_ADDRESS,
  KELP_TOKEN_SYMBOL,
  KELP_TOKEN_DECIMAL,
  KELP_TOKEN_IMAGE,
} from "@/utils/constants";
import Thunder from "@/assets/icons/system/Thunder";

const ConnectButton = () => {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const { data, isError, isLoading } = useEnsName();

  const onOpen = async () => {
    setLoading(true);
    await open();
    setLoading(false);
  };

  const onClose = async () => {
    setLoading(true);
    await disconnect();
    setLoading(false);
  };

  const addKelpToWallet = async () => {
    if (!window.ethereum) {
      return;
    }

    await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: KELP_TOKEN_ADDRESS,
          symbol: KELP_TOKEN_SYMBOL,
          decimals: KELP_TOKEN_DECIMAL,
          image: KELP_TOKEN_IMAGE,
        },
      },
    });
  };

  return (
    <>
      {isConnected && address ? (
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              type="button"
              aria-label="wallet-info"
              className="font-medium bg-neutral-100 md:bg-primary-400 md:hover:bg-primary-500 hover:bg-neutral-200 duration-300 text-primary-400 md:text-neutral-50 transition-colors font-poppins text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl uppercase rounded-lg p-2.5"
            >
              {data || `${shortenHex(address, 4)}`}
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="rounded-lg z-50 bg-white font-poppins border py-3 px-1.5 w-48 2xl:w-56 3xl:w-64 md:mr-14 border:slate-200 text-slate-700"
              sideOffset={8}
            >
              <button
                type="button"
                aria-label="import-kelp"
                onClick={addKelpToWallet}
                className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl rounded text-left hover:bg-primary-400 hover:text-white w-full py-2 px-1.5"
              >
                Import Kelp to wallet
              </button>
              <button
                type="button"
                aria-label="connection-btn"
                onClick={onClose}
                className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl rounded text-left hover:bg-red-100 text-red-500  w-full py-2 px-1.5"
              >
                {loading ? "Disconnecting" : "Disconnect"}
              </button>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ) : (
        <button
          id="connect-wallet"
          type="button"
          aria-label="wallet-connect"
          onClick={onOpen}
          className="bg-primary-400 3xl:text-xl 4xl:text-2xl text-white text-base 2xl:text-lg h-12 2xl:h-14 3xl:h-16 4xl:h-20 font-medium rounded-xl 4xl:rounded-2xl hover:bg-primary-500 px-5 flex justify-between items-center gap-x-2"
        >
          {loading ? "Loading..." : "Connect Wallet"}
          <span>
            <Thunder className="w-5 h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-9 4xl:h-9 text-white" />
          </span>
        </button>
      )}
    </>
  );
};

export default ConnectButton;

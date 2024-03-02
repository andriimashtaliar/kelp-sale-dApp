import { useAccount } from "wagmi";

import TokenBalance from "@/components/TokenBalance";
import ConnectButton from "./Button";

import { KELP_TOKEN_ADDRESS } from "@/utils/constants";

export default function Navbar() {
  const { isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <div className="w-max relative bg-primary-50 max-w-full rounded-lg">
          <TokenBalance tokenAddress={KELP_TOKEN_ADDRESS}>
            <ConnectButton />
          </TokenBalance>
        </div>
      ) : (
        <ConnectButton />
      )}
    </>
  );
}

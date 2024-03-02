import { useAccount, useBalance } from "wagmi";
import { Address } from "@/utils/types";
import { ReactNode } from "react";

type TokenBalanceProps = {
  tokenAddress: Address;
  children?: ReactNode;
};
const activeChainId = process.env.NEXT_PUBLIC_CHAIN_ID;
const TokenBalance = ({ tokenAddress, children }: TokenBalanceProps) => {
  const { address } = useAccount();
  const { data } = useBalance({
    address,
    token: tokenAddress,
    chainId: Number(activeChainId),
    watch: false,
  });

  return (
    <div className="flex justify-between font-poppins items-center bg-primary-50 rounded-xl pl-2 pr-1 py-1 3xl:pr-1.5 3xl:py-1.5 font-medium text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl leading-6 text-black mx-auto">
      <p className="px-2.5">
        {data ? data.formatted.slice(0, data.formatted.indexOf(".") + 7) : 0}{" "}
        KELP
      </p>
      {children}
    </div>
  );
};

export default TokenBalance;

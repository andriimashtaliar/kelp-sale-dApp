import { useContractRead } from "wagmi";
import crowdSaleABI from "@/contracts/CrowdSale.json";
import { Address } from "@/utils/types";

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

type usdRaised = any;

export default function useUSDRaised(): usdRaised {
  const contract = useContractRead({
    address: crowdSaleContractAddress,
    abi: crowdSaleABI,
    functionName: "usdRaised",
    scopeKey: "usdRaised",
    watch: false,
  });

  return contract;
}

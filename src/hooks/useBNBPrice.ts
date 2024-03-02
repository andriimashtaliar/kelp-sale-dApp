import { useContractRead } from "wagmi";
import crowdSaleABI from "@/contracts/CrowdSale.json";
import { Address } from "@/utils/types";

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

type BNBPriceResult = any;

export default function useBNBPrice(): BNBPriceResult {
  const contract = useContractRead({
    address: crowdSaleContractAddress,
    abi: crowdSaleABI,
    functionName: "getBNBPrice",
    scopeKey: "getBNBPrice",
    watch: false,
  });

  return contract;
}

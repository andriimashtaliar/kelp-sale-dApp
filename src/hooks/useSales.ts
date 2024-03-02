import { useContractRead } from "wagmi";
import crowdSaleABI from "@/contracts/CrowdSale.json";
import { Address } from "@/utils/types";

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

export type SaleInfo =
  | {
    limitPerAccount: bigint;
    paused: boolean;
    rate: bigint;
    startTime: bigint;
    totalLimit: bigint;
  }
  | undefined;

export default function useSales(type: string) {
  const { data, isLoading, error } = useContractRead({
    address: crowdSaleContractAddress,
    abi: crowdSaleABI,
    functionName: "totalSales",
    scopeKey: "totalSales",
    args: [type],
    watch: false,
  });

  const saleInfo = data as SaleInfo;

  return {
    data: saleInfo,
    isLoading,
    error,
  };
}

import { useContractRead } from "wagmi";
import crowdSaleABI from "@/contracts/CrowdSale.json";
import { Address } from "@/utils/types";

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

type startTimeInfo = any;

export default function useStartTime(): startTimeInfo {
  const contract = useContractRead({
    address: crowdSaleContractAddress,
    abi: crowdSaleABI,
    functionName: "startTime",
    scopeKey: "startTime",
    watch: false,
  });

  return contract;
}

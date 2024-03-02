import { useContractRead } from "wagmi";
import crowdSaleABI from "@/contracts/CrowdSale.json";
import { Address } from "@/utils/types";

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

type endTimeInfo = any;

export default function useEndTime(): endTimeInfo {
  const contract = useContractRead({
    address: crowdSaleContractAddress,
    abi: crowdSaleABI,
    functionName: "endTime",
    scopeKey: "endTime",
    watch: false,
  });

  return contract;
}

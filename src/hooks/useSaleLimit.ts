import { useContractRead } from "wagmi";
import crowdSaleABI from "@/contracts/CrowdSale.json";
import { Address } from "@/utils/types";

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

type saleLimit = any;

export default function usesaleLimit(): saleLimit {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contract = useContractRead({
    address: crowdSaleContractAddress,
    abi: crowdSaleABI,
    functionName: "saleLimit",
    scopeKey: "saleLimit",
    watch: false,
  });

  return contract;
}

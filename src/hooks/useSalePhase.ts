import { useContractRead } from 'wagmi';
import crowdSaleABI from '@/contracts/CrowdSale.json';
import { Address } from '@/utils/types';

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

type phase = any;

export default function useSalePhase(): phase {
  const contract = useContractRead({
    address: crowdSaleContractAddress,
    abi: crowdSaleABI,
    functionName: 'activePhase',
    scopeKey: 'activePhase',
    watch: false,
  });

  return contract;
}

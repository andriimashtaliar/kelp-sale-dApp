import { useContractRead } from 'wagmi';
import erc20ABI from '@/contracts/ERC20.json';
import { Address } from '@/utils/types';
import { parseEther } from 'viem';

const BUSD_ADDRESS = process.env.NEXT_PUBLIC_BUSD_ADDRESS as Address;

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;
type allowance = any;
export default function useGetAllowance(owner: Address): allowance {
  const contract = useContractRead({
    address: BUSD_ADDRESS,
    abi: erc20ABI,
    functionName: 'allowance',
    scopeKey: 'allowance',
    args: [owner, crowdSaleContractAddress],
    watch: false,
  });
  return contract;
}

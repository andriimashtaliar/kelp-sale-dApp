/* eslint-disable react-hooks/rules-of-hooks */
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import crowdSaleABI from '@/contracts/CrowdSale.json';
import { Address } from '@/utils/types';
import { parseEther } from 'viem';
import { toast } from 'react-toastify';

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

const activeChainId = process.env.NEXT_PUBLIC_CHAIN_ID;

export default function useBuyKelpBUSD(
  beneficiary: string,
  busdAmount: string,
  enabled: boolean
) {
  const { config, refetch } = usePrepareContractWrite({
    chainId: Number(activeChainId!),
    address: crowdSaleContractAddress,
    abi: crowdSaleABI,
    functionName: 'buyTokensBUSD',
    args: [beneficiary, parseEther(busdAmount)],
    enabled: enabled,
    onError: (error) => {
      const cause = error.cause + '';
      let reasonIndex = cause.indexOf('reason:');
      if (reasonIndex != -1) {
        reasonIndex += 'reason:'.length;
        const reason = cause.slice(reasonIndex).trim();
        const endLine = reason.indexOf('\n');
        const message = reason.slice(0, endLine).trim();
        toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  });
  const contract = useContractWrite(config);
  return {...contract, refetch};
}

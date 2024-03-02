import { useContractWrite, usePrepareContractWrite } from "wagmi";
import erc20ABI from "@/contracts/ERC20.json";
import { Address } from "@/utils/types";
import { parseEther } from "viem";
import { toast } from 'react-toastify';

const BUSD_ADDRESS = process.env.NEXT_PUBLIC_BUSD_ADDRESS as Address;

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

export default function useApproveBUSD(amount: string, enabled: boolean) {
  const { config, refetch } = usePrepareContractWrite({
    address: BUSD_ADDRESS,
    abi: erc20ABI,
    functionName: "approve",
    args: [crowdSaleContractAddress, parseEther(amount)],
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

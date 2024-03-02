import { encodeFunctionData, formatUnits } from 'viem';

import { createPublicClient, http, parseEther } from 'viem';

import crowdSaleABI from '../contracts/CrowdSale.json';
import { Address } from './types';
import { BSC_MAINNET_RPC_URL } from './constants';
import { bsc } from 'viem/chains';

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

export const parseBalance = (
  value: bigint,
  decimals = 18,
  decimalsToDisplay = 8
): string => {
  const valueInUnits = formatUnits(value, decimals);
  return parseFloat(valueInUnits).toFixed(decimalsToDisplay);
};

const crowdSaleContractAddress = process.env
  .NEXT_PUBLIC_CROWD_SALE_ADDRESS as Address;

const client = createPublicClient({
  chain: bsc,
  transport: http(BSC_MAINNET_RPC_URL),
});

export const getFixedAmount = (
  amount: string | number,
  decimalPlaces: number = 6
): string => {
  if (amount === undefined) {
    return '0.00';
  }

  const parsedAmount =
    typeof amount === 'string' ? Number.parseFloat(amount) : amount;

  if (Number.isNaN(parsedAmount)) {
    return '0.00';
  }

  const significantDigits = parsedAmount > 10 ? 2 : decimalPlaces;
  return parsedAmount.toFixed(significantDigits);
};

export const buyKelpTokenGasFee = async (
  bnbPrice: string,
  value: string,
  address?: string
) => {
  try {
    // const abi = crowdSaleABI.map((method: any) => ({ ...method }));
    // const iMainContract = parseAbi(abi);
    const data = encodeFunctionData({
      abi: crowdSaleABI,
      functionName: 'buyTokensBNB',
      args: [address],
    });

    const gasPrice = await client.getGasPrice();
    
    const gasLimit = await client.estimateGas({
      to: crowdSaleContractAddress,
      account: address as Address,
      data,
      value: parseEther(value),
    });

    const ceilGasLimit = Math.ceil(Number(gasLimit.toString()));

    const networkFeeInWei =
      Math.ceil(Number(gasPrice.toString())) * ceilGasLimit;
    const networkFee = networkFeeInWei / 1e18;

    const networkFeeFiat = networkFee * Number(bnbPrice);
    return {
      networkFeeFiat: getFixedAmount(networkFeeFiat, 2),
      networkFee,
      gasLimit: ceilGasLimit,
      gasPrice: Number(gasPrice.toString()),
    };
  } catch (error) {
    throw error;
  }
};

export const approveKelpTokenGasFee = async (
  bnbPrice: string,
  value: string,
  address?: string
) => {
  try {
    // const abi = crowdSaleABI.map((method: any) => ({ ...method }));
    // const iMainContract = new utils.Interface(abi);
    const data = encodeFunctionData({
      abi: crowdSaleABI,
      functionName: 'buyTokensBNB',
      args: [address],
    });

    const gasPrice = await client.getGasPrice();

    const gasLimit = await client.estimateGas({
      to: crowdSaleContractAddress,
      account: address as Address,
      data,
      value: parseEther(value),
    });

    const ceilGasLimit = Math.ceil(Number(gasLimit.toString()));

    const networkFeeInWei = Number(gasPrice.toString()) * ceilGasLimit;
    const networkFee = networkFeeInWei / 1e18;

    const networkFeeFiat = networkFee * Number(bnbPrice);
    return {
      networkFeeFiat: getFixedAmount(networkFeeFiat, 2),
      networkFee,
      gasLimit: ceilGasLimit,
      gasPrice: Number(gasPrice.toString()),
    };
  } catch (error) {
    throw error;
  }
};

const abbrev = ['', 'K', 'M', 'G', 'T'];
export const abbreviateNumber = (number: number) => {
  const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3);
  const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1));
  const suffix = abbrev[order];

  return (number / Math.pow(10, order * 3)).toFixed(2) + suffix;
};

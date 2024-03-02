import { useMemo } from 'react';
import useSalePhase from './useSalePhase';
import { formatEther } from 'viem';

const useKelpPrice = () => {
  const { data: tokenPrice, error } = useSalePhase();

  const kelpPrice = useMemo(() => {
    if (!tokenPrice) {
      return '0.0';
    }

    const price = tokenPrice.price;
    const priceStr = formatEther(price);

    return priceStr.slice(0, priceStr.indexOf('.') + 6);
  }, [tokenPrice]);

  return {
    kelpPrice,
    error,
  };
};

export default useKelpPrice;

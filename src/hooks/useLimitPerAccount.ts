import { useMemo } from "react";
import useSales from "@/hooks/useSales";
import { SALE_TYPE } from "@/utils/constants";
import { formatEther } from "viem";

const useLimitPerAccount = () => {
  const { data: saleInfo, isLoading, error } = useSales(SALE_TYPE);

  const limitPerAccount = useMemo(() => {
    if (!saleInfo) {
      return "0.0";
    }

    const limit = saleInfo.limitPerAccount;
    const limitStr = formatEther(limit);

    return limitStr.slice(0, limitStr.indexOf(".") + 6);
  }, [saleInfo]);

  return {
    limitPerAccount,
    isLoading,
    error,
  };
};

export default useLimitPerAccount;

import { useState, useEffect } from "react";

const STRAPI_API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY as string;

const useInterval = (callback: () => void, delay: number) => {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [callback, delay]);
};

const useTokenHolderCount = () => {
  const [holderCount, setHolderCount] = useState(null);
  const [error, setError] = useState<any>(null);

  const fetchTokenHolderCount = async () => {
    try {
      const response = await fetch(
        "https://api.kelp.finance/api/airdrop-campaign/tokenholdercount",
        {
          method: "get",
          headers: new Headers({
            Authorization: `Bearer ${STRAPI_API_KEY}`,
          }),
        }
      );
      const data = await response.json();
      setHolderCount(data);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchTokenHolderCount();
  }, []);

  useInterval(fetchTokenHolderCount, 5000);

  return { holderCount, error };
};

export default useTokenHolderCount;

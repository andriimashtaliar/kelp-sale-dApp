import { useState, useEffect } from "react";

const STRAPI_API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY as string;

type OfflineInvestmentType = {
  attributes: {
    Amount: number;
    Name: string;
    createdAt: Date;
    publishedAt: Date;
    updatedAt: Date;
  };
  id: number;
};

const useOfflineInvestment = () => {
  const [totalOfflineInvestment, setTotalOfflineInvestment] =
    useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOfflineInvestment = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.kelp.finance/api/offline-investors?pagination[pageSize]=10000",
          {
            method: "get",
            headers: new Headers({
              Authorization: `Bearer ${STRAPI_API_KEY}`,
            }),
          }
        );
        const data = await response.json();
        const totalInvestment = data?.data.reduce(
          (sum: number, val: OfflineInvestmentType) =>
            sum + val.attributes.Amount,
          0
        );
        setTotalOfflineInvestment(totalInvestment);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfflineInvestment();
  }, []);

  return { offlineInvestment: totalOfflineInvestment, loading };
};

export default useOfflineInvestment;

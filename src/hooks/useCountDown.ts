import { useEffect, useState } from "react";

const useCountDown = (targetDate: number) => {
  const [countDown, setCountDown] = useState(
    Math.floor((targetDate - new Date().getTime()) / 1000)
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countDown > 0) {
      timer = setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [countDown, targetDate]);

  return countDown;
};

export { useCountDown };

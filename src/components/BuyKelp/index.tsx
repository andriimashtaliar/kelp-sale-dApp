import { FunctionComponent, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import Input from "@/components/Input";
import PaymentMethod from "@/components/PaymentMethod";
import ConfirmPurchase from "@/components/ConfirmPurchase";
import { PaymentType } from "@/utils/types";
import { getFixedAmount } from "@/utils/util";
import { formatEther, parseEther } from "viem";

interface Props {
  bnbBalance: any;
  busdBalance: any;
  bnbPrice: bigint;
  kelpPrice: string;
}

const BuyKelp: FunctionComponent<Props> = ({
  bnbBalance,
  busdBalance,
  bnbPrice,
  kelpPrice,
}) => {
  const [paymentType, setPaymentType] = useState<PaymentType>("BNB");
  const [usdAmount, setUSDAmount] = useState<string>("0.00");
  const [confirmPurchaseModal, setConfirmPurchaseModal] =
    useState<boolean>(false);
  const { address, isConnected } = useAccount();

  const availableBalance = useMemo(() => {
    if (paymentType === "BNB") {
      if (!bnbPrice || !bnbBalance?.value) {
        return "0.00";
      }

      const value = bnbPrice * bnbBalance.value / parseEther("1");
      if (!value) {
        return "0.00";
      }

      return getFixedAmount(formatEther(value), 2);
    } else {
      if (!busdBalance?.formatted) {
        return "0.00";
      }
      return getFixedAmount(Number(busdBalance?.formatted), 2);
    }
  }, [paymentType, bnbPrice, bnbBalance, busdBalance]);

  const notifySuccess = () => {
    toast.success("You bought Kelp token successfully!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const notifyError = () => {
    toast.error("Something went wrong!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const notifyCustomError = (err: string) => {
    toast.error(`${err}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = 0;
    if (e.target.value === "") {
      newValue = 0;
    } else {
      newValue = parseFloat(e.target.value) * 10;
    }
    setUSDAmount(parseFloat(newValue.toString()).toFixed(2));
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.style.width = e.currentTarget.value.length + "ch";
    const value = e.currentTarget.value;
    e.currentTarget.value = "";
    e.currentTarget.value = value;
  };

  const handleTouch = (e: React.TouchEvent<HTMLInputElement>) => {
    e.currentTarget.style.width = e.currentTarget.value.length + "ch";
    const value = e.currentTarget.value;
    e.currentTarget.value = "";
    e.currentTarget.value = value;
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.style.width = e.currentTarget.value.length + "ch";
    setUSDAmount(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      setUSDAmount("0.00");
    }
    if (
      e.key === "Left" ||
      e.key === "ArrowLeft" ||
      e.key === "Right" ||
      e.key === "ArrowRight" ||
      e.key === "Up" ||
      e.key === "ArrowUp" ||
      e.key === "Down" ||
      e.key === "ArrowDown"
    ) {
      e.preventDefault();
    }
  };
  const getPartialAmount = (percentage: string) => {
    let value = "0.00";

    if (paymentType === "BNB" && bnbBalance?.value) {
      const balanceInWei = bnbPrice as bigint * bnbBalance?.value * parseEther(percentage);
      const balanceInEther = balanceInWei / (parseEther("1") * parseEther("1"));
      const balanceInPercentage = getFixedAmount(formatEther(balanceInEther), 2);
      value = balanceInPercentage;

    }

    if (paymentType === "BUSD" && busdBalance?.value)
      value = getFixedAmount(
        formatEther(
          (busdBalance?.value as bigint)
          * parseEther(percentage)
          / parseEther("1")
        ),
        2
      );
    setUSDAmount(value);
  };

  const handleTx = (isSuccess: boolean) => {
    setConfirmPurchaseModal(false);
  };

  const handleBuy = () => {
    if (!isConnected || !address) {
      notifyCustomError("Please connect your wallet");
      return;
    }

    if (!usdAmount || parseFloat(usdAmount) <= 0) {
      notifyCustomError("Invalid Amount");
      return;
    }

    setConfirmPurchaseModal(true);
  };

  const kelpAmount = parseFloat(usdAmount) / parseFloat(kelpPrice);
  const bnbAmount = useMemo(() => {
    if (!bnbPrice || kelpAmount <= 0.0 || Number.isNaN(kelpAmount) || !isFinite(kelpAmount)) {
      return "0.0";
    }

    return formatEther(
      parseEther("" + kelpAmount) * parseEther(kelpPrice) / bnbPrice as bigint
    );
  }, [bnbPrice, kelpAmount, kelpPrice]);

  return (
    <>
      <div className="p-5 pt-16 md:pt-0 md:!px-10 font-poppins md:pb-12 flex-1 flex flex-col justify-between">
        <div className="flex flex-col">
          <PaymentMethod
            selectedOption={paymentType}
            setSelectedOption={setPaymentType}
          />
          <div className="mt-12 gap-y-3 font-poppins flex flex-col items-center">
            <span className="text-sm text-slate-600 text-center uppercase">
              ENTER AMOUNT
            </span>
            <Input
              value={usdAmount}
              onPaste={(e) => {
                e.preventDefault();
              }}
              onChange={handleChange}
              onClick={handleClick}
              onTouch={handleTouch}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
            />
            <div className="text-slate-600 text-xs uppercase">
              Available: ${availableBalance}
            </div>
            <ul className="flex w-fit pt-6 pb-16 gap-5">
              {["0.25", "0.5", "0.75", "1"].map((i: string) => (
                <li
                  key={Number(i)}
                  className="text-slate-600 w-14 text-center font-semibold hover:bg-slate-400/20 dark:hover:bg-slate-100/20 duration-300 transition-colors cursor-pointer border border-gray-200 rounded-md py-2"
                  onClick={() => getPartialAmount(i)}
                >
                  {Number(i) * 100}%
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type="button"
          aria-label="buy-kelp"
          onClick={handleBuy}
          className="w-72 mx-auto uppercase  text-white font-medium bg-primary-400 hover:bg-primary-500 duration-300 transition-colors py-2.5 lg:py-3 rounded-lg"
        >
          Purchase
        </button>
        {confirmPurchaseModal && <ConfirmPurchase
          show={confirmPurchaseModal}
          onHide={setConfirmPurchaseModal}
          bnbAmount={bnbAmount}
          bnbPrice={bnbPrice as bigint}
          usdAmount={usdAmount}
          kelpPrice={kelpPrice}
          onSettle={handleTx}
          paymentType={paymentType}
        />}
      </div>
    </>
  );
};

export default BuyKelp;

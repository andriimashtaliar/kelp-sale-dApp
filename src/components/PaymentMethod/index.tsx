import React, { useState, useMemo } from "react";

import Image from "next/image";

import { useAccount, useBalance } from "wagmi";

import { getFixedAmount } from "@/utils/util";
import { PaymentType, Address } from "@/utils/types";

import * as Dialog from "@radix-ui/react-dialog";

import BNB from "@/assets/images/BNB.png";
import BUSD from "@/assets/images/BUSD.png";
import Arrow from "@/assets/icons/Arrow";
import XMark from "@/assets/icons/XMark";

const BUSD_ADDRESS = process.env.NEXT_PUBLIC_BUSD_ADDRESS as Address;
const activeChainId = process.env.NEXT_PUBLIC_CHAIN_ID;

type PaymentMethodProps = {
  selectedOption: PaymentType;
  setSelectedOption: (type: PaymentType) => void;
};

const PaymentMethod = ({
  selectedOption,
  setSelectedOption,
}: PaymentMethodProps) => {
  const { address } = useAccount();
  const {
    data: dataBNB,
  } = useBalance({
    address,
    chainId: Number(activeChainId),
    watch: false,
  });
  const {
    data: dataBUSD,
  } = useBalance({
    address,
    chainId: Number(activeChainId),
    token: BUSD_ADDRESS,
    watch: false,
  });

  const [show, setShow] = useState(false);

  const formattedValue = useMemo(() => {
    if (selectedOption === "BNB") {
      return dataBNB?.formatted ? getFixedAmount(dataBNB.formatted) : 0;
    } else {
      return dataBUSD?.formatted ? getFixedAmount(dataBUSD.formatted, 2) : 0;
    }
  }, [selectedOption, dataBNB, dataBUSD]);

  function handleChange(value: PaymentType) {
    if (!value) {
      return;
    }
    setSelectedOption(value);
    setShow(false);
  }

  return (
    <>
      <Dialog.Root open={show} onOpenChange={setShow}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            aria-label="select-payment"
            className="w-fit hover:bg-neutral-100 border-2 border-neutral-200 text-neutral-800 flex justify-between px-3 py-4 gap-x-2 items-center rounded-lg mx-auto"
          >
            <Image
              key={selectedOption === "BNB" ? 1 : 2}
              src={selectedOption === "BNB" ? BNB : BUSD}
              className="h-8 w-8"
              width={40}
              height={40}
              alt=""
              priority
            />
            <span className="text-lg md:text-xl font-medium">
              {selectedOption}
            </span>
            <h2 className="md:text-xl text-lg font-semibold min-w-28">
              {formattedValue}
            </h2>
            <Arrow className="w-5 h-5" />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-neutral-200/80 fixed inset-0" />
          <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-sm font-medium text-neutral-800uppercase ">
              Pay With
            </Dialog.Title>
            <div className="!pb-1 sm:!pb-8 !pt-8 sm:!pt-4">
              <div className="mt-1.25 !mb-3 !py-3 border-y border-neutral-200">
                <button
                  type="button"
                  aria-label="bnb-btn"
                  className="w-full hover:bg-neutral-50/80 rounded-md flex items-center justify-between py-2 pl-1"
                  onClick={() => handleChange("BNB")}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-neutral-100 rounded-md">
                      <Image src={BNB} width={32} height={32} alt="" />
                    </div>
                    <h5 className="text-lg md:text-xl text-neutral-800 font-medium">
                      BNB
                    </h5>
                  </div>
                  <Arrow className="h-6 w-6 text-neutral-600 " />
                </button>
              </div>
              <button
                type="button"
                aria-label="busd-btn"
                className="w-full hover:bg-neutral-50/80  rounded-md flex items-center justify-between py-2 pl-1"
                onClick={() => handleChange("BUSD")}
              >
                <div className="flex items-center gap-4 ">
                  <div className="p-3.5 bg-neutral-100  rounded-md">
                    <Image src={BUSD} width={32} height={32} alt="" />
                  </div>
                  <h5 className="text-lg md:text-xl text-neutral-800  font-medium">
                    BUSD
                  </h5>
                </div>
                <Arrow className="h-6 w-6 text-neutral-600" />
              </button>
            </div>
            <Dialog.Close asChild>
              <button
                onClick={() => setShow(false)}
                className="absolute top-2 right-2 hover:bg-neutral-300/20 rounded-full p-1"
                aria-label="Close"
              >
                <XMark className="w-5 h-5 text-neutral-800 " />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default PaymentMethod;

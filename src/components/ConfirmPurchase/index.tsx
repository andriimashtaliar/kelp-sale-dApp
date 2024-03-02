import React, { FunctionComponent, useEffect, useState, useCallback } from 'react';

import { useAccount, useBalance } from 'wagmi';
import { WriteContractResult, waitForTransaction } from 'wagmi/actions';

import { toast } from 'react-toastify';
import clsx from 'clsx';
import * as Dialog from '@radix-ui/react-dialog';
import useBuyKelpBNB from '@/hooks/useBuyKelpBNB';
import useBuyKelpBUSD from '@/hooks/useBuyKelpBUSD';
import useApproveBUSD from '@/hooks/useApproveBUSD';
import { parseBalance, buyKelpTokenGasFee, getFixedAmount } from '@/utils/util';
import { Address, PaymentType } from '@/utils/types';
import XMark from '@/assets/icons/XMark';
import { formatEther, parseEther, formatUnits, parseUnits } from 'viem';
import useGetAllowance from '@/hooks/useGetAllowance';

interface Props {
  show?: boolean;
  onHide: any;
  bnbAmount: string;
  bnbPrice: bigint;
  usdAmount: string;
  kelpPrice: string;
  onSettle: (isSuccess: boolean) => void;
  paymentType: PaymentType;
}

const BUSD_ADDRESS = process.env.NEXT_PUBLIC_BUSD_ADDRESS as Address;
const activeChainId = process.env.NEXT_PUBLIC_CHAIN_ID;

const ConfirmPurchase: FunctionComponent<Props> = ({
  show,
  bnbAmount,
  bnbPrice,
  usdAmount,
  kelpPrice,
  paymentType,
  onHide,
  onSettle,
}) => {
  const { address } = useAccount();
  const { refetch: bnbBalanceRefetch } = useBalance({
    address,
    chainId: Number(activeChainId),
  });
  const { refetch: busdBalanceRefetch } = useBalance({
    address,
    chainId: Number(activeChainId),
    token: BUSD_ADDRESS,
  });
  const { data: allowance } = useGetAllowance(address as Address);
  
  const [gasFee, setGasFee] = useState<string>('');
  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [hasApproved, setHasApproved] = useState<boolean>(false);
  const [showValueDetail, setShowValueDetail] = useState(false);
  const [showFeeDetail, setShowFeeDetail] = useState(false);  
  
  const transactionFee = gasFee
    ? formatEther((parseEther(gasFee) * bnbPrice) / parseEther('1'))
    : '';

  const {
    data: walletBNB,
  } = useBalance({
    address,
    chainId: Number(activeChainId),
    watch: false,
  });

  const myBalence = Number(getFixedAmount(Number(walletBNB?.formatted) - Number(bnbAmount) - Number(gasFee)));
  const bnbInput = Number(getFixedAmount(Number(bnbAmount) - Number(gasFee)));

  const subUSDAmount = transactionFee
    ? paymentType === 'BNB'
      ? Number(usdAmount)
      : Number(usdAmount) + Number(transactionFee)
    : 0;

  const outKelpAmount: any = subUSDAmount
    ? paymentType === 'BNB'
      ? (Number(subUSDAmount) / parseFloat(kelpPrice)).toFixed(2)
      : (parseFloat(usdAmount) / parseFloat(kelpPrice)).toFixed(2)
    : '';

  const subBNBAmount: Number = gasFee
    ? bnbInput > 0
      ? bnbInput
      : Number(bnbAmount)
    : Number(bnbAmount);

  const {
    data: dataBNB,
    isLoading: isLoadingBNB,
    isSuccess: isSuccessBNB,
    writeAsync: writeAsyncBNB,
    refetch: bnbRefetch,
  } = useBuyKelpBNB(address ?? '', String(subBNBAmount), paymentType === "BNB");

  const {
    data: dataApprove,
    isLoading: isLoadingApprove,
    isSuccess: isSuccessApprove,
    writeAsync: writeAsyncApprove,
    refetch: approveRefetch
  } = useApproveBUSD(usdAmount, paymentType === "BUSD");

  const {
    data: dataBUSD,
    isLoading: isLoadingBUSD,
    isSuccess: isSuccessBUSD,
    writeAsync: writeAsyncBUSD,
    refetch: busdRefetch
  } = useBuyKelpBUSD(
    address ?? '',
    (Number(usdAmount) - Number(gasFee)).toString(),
    paymentType === "BUSD"
  );

  const isLoading = paymentType === 'BNB' ? isLoadingBNB : isLoadingBUSD;

  const handleApprove = async () => {
    if (writeAsyncApprove) {
      try {
        await writeAsyncApprove();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleBNBPurchase = async () => {
    if (writeAsyncBNB) {
      try {
        await writeAsyncBNB();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleBUSDPurchase = async () => {
    if (writeAsyncBUSD) {
      try {
        await writeAsyncBUSD();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setHasApproved(
      Number(allowance) >= Number(parseEther(usdAmount))
    )
  }, [usdAmount]);

  useEffect(() => {
    const onTxSettle = async () => {
      setIsWriting(true);
      const { hash } = dataApprove as any;
      const res = await waitForTransaction({ hash });
      setIsWriting(false);

      if (res && res.blockHash) {
        setHasApproved(true);
      } else {
        setHasApproved(false);
      }
    }

    if (paymentType === 'BUSD' && isSuccessApprove && dataApprove) {
      onTxSettle();
    } 
  }, [isSuccessApprove, dataApprove]);

  useEffect(() => {
    const onTxSettle = async () => {
      setIsWriting(true);
      const { hash } = dataBNB as any;
      const res = await waitForTransaction({ hash });
      setIsWriting(false);
      
      if (res && res.blockHash) {
        await bnbBalanceRefetch();
      }
      
      if (res && res.blockHash) {
        onSettle(true);
      } else {
        onSettle(false);
      }
    };

    if (paymentType === 'BNB' && isSuccessBNB && dataBNB) {
      onTxSettle();
    } 
  }, [isSuccessBNB, dataBNB]);


  useEffect(() => {
    const onTxSettle = async () => {
      setIsWriting(true);
      const { hash } = dataBUSD as any;
      const res = await waitForTransaction({ hash });
      setIsWriting(false);
      
      if (res && res.blockHash) {
        await busdBalanceRefetch();
      }
      
      if (res && res.blockHash) {
        onSettle(true);
      } else {
        onSettle(false);
      }
    };


    if (paymentType === 'BUSD' && isSuccessBUSD && dataBUSD) {
      onTxSettle();
    }
  }, [isSuccessBUSD, dataBUSD]);

  useEffect(() => {
    const estimateFee = async () => {
      try {
        const { networkFee } = await buyKelpTokenGasFee(
          parseBalance(bnbPrice),
          formatUnits(parseUnits('0.000001', 6), 6),
          address
        );
        setGasFee('' + networkFee);
      } catch (error) {
        console.log(error);
      }
    };

    try {
      estimateFee();
    } catch (e) {
      console.log(e);
    }
  }, [bnbPrice, address, paymentType]);

  return (
    <>
      <Dialog.Root open={show} onOpenChange={onHide}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-slate-200/80 fixed inset-0" />
          <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <p className="text-2xl uppercase font-semibold text-slate-800">
              SUMMARY
            </p>

            <ol className="relative ml-5 my-5 border-l-2 border-slate-200">
              <li className="mb-10 ml-8 ">
                <span className="absolute flex items-center justify-center p-1 w-8 h-8 bg-primary-400 rounded-full -left-4 ring-4 ring-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="none"
                    viewBox="0 0 27 27"
                  >
                    <path
                      fill="#fff"
                      stroke="#fff"
                      d="M13.5 1l3.097 3.162-7.799 7.776L5.701 8.85 13.5 1zM18.201 5.688L21.3 8.85l-12.5 12.463L5.7 18.225l12.5-12.538zM4.097 10.375l3.097 3.162-3.097 3.088L1 13.537l3.097-3.162zM22.904 10.375L26 13.537 13.5 26l-3.098-3.088 12.5-12.537z"
                    ></path>
                  </svg>
                </span>
                <h6 className="uppercase text-sm text-slate-600">You Pay</h6>
                <div className="font-medium leading-tight inline-flex gap-x-5 items-center">
                  <h4 className="text-2xl font-bold text-slate-800 ">
                    ${usdAmount} in {paymentType}
                  </h4>
                  <button
                    type="button"
                    aria-label="show-val"
                    onClick={() => setShowValueDetail((prev) => !prev)}
                    className="bg-primary-400 p-0.5 rounded-full text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 duration-300 transition-transform"
                    >
                      {showValueDetail ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      )}
                    </svg>
                  </button>
                </div>
                <p className={showValueDetail ? 'text-sm' : 'hidden'}>
                  {getFixedAmount(bnbAmount)} BNB x $
                  {parseBalance(bnbPrice ?? '0', 18, 2)} / BNB
                </p>
              </li>
              <li className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-400 rounded-full -left-3 ">
                  <span className="w-2 h-1 bg-slate-50" />
                </span>
                {transactionFee ? (
                  <span className="text-sm font-medium text-slate-1">
                    <div className="text-sm font-medium text-black flex items-center gap-x-5">
                      <h6>
                        ${getFixedAmount(transactionFee)} USD Transaction fee
                      </h6>
                      <button
                        type="button"
                        aria-label="show-details"
                        onClick={() => setShowFeeDetail((prev) => !prev)}
                        className="bg-primary-400 p-0.5 rounded-full text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={clsx(
                        'overflow-hidden transition-all duration-200  font-normal',
                        showFeeDetail ? 'block' : 'hidden'
                      )}
                    >
                      {getFixedAmount(gasFee)} BNB Transaction fee x $
                      {parseBalance(bnbPrice ?? '0', 18, 2)} / BNB
                    </div>
                  </span>
                ) : (
                  <span className="text-xs font-medium  text-slate-800">
                    Transaction fee: Loading ...
                  </span>
                )}
              </li>
              <li className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-400 rounded-full -left-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="6"
                    fill="none"
                    viewBox="0 0 9 6"
                  >
                    <path
                      fill="#fff"
                      d="M8.512 0v1.536H0V0h8.512zm0 3.632v1.536H0V3.632h8.512z"
                    ></path>
                  </svg>
                </span>
                {usdAmount ? (
                  paymentType == 'BNB' ? (
                    myBalence > 0 ? (
                      <span className="text-xs font-medium text-slate-800">
                        ${getFixedAmount(subUSDAmount)} USD Subtotal
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-800">
                        USD Subtotal: Wrong Input ....
                      </span>
                    )
                  ) : (
                    <span className="text-xs font-medium text-slate-800">
                      ${getFixedAmount(subUSDAmount)} Amount with gas fee
                    </span>
                  )
                ) : (
                  <span className="text-xs font-medium text-slate-800">
                    USD Subtotal: Loading ...
                  </span>
                )}
              </li>
              <li className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-400 rounded-full -left-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                </span>
                <span className="text-xs font-medium text-slate-800 ">
                  ${kelpPrice} per KELP
                </span>
              </li>
              <li className="ml-8">
                <span className="absolute flex items-center justify-center p-1 w-8 h-8 bg-primary-400 rounded-full bottom-0 -left-4 ring-4 ring-primary-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 40 40"
                  >
                    <rect width="40" height="40" fill="#1cc46a" rx="20"></rect>
                    <path
                      fill="#fff"
                      d="M13.96 32.493c-.96 0-.96-9.605-.96-10.325C13 20.967 13 8 14.2 8h3.122c.48 0 .72.24.72.72s-.96 3.122-.96 10.806c0 .96 0 2.401.48 2.401.961 0 3.602-3.842 3.602-6.963 0-.72.24-.72.961-.72h1.68c.481 0 1.202-.24 1.202.72 0 4.082-3.122 6.483-3.122 7.204 0 .72 1.2.96 2.401 2.641 1.2 1.68 2.401 3.842 2.401 7.444 0 .96-.48.72-1.2.72h-2.401c-.72 0-.961 0-.961-.96 0-4.082-1.921-7.204-2.882-7.204-.48 0-1.68.48-1.68 1.921 0 3.602.72 5.283.72 6.003 0 .24-.24.24-.72.24H13.96v-.48z"
                    ></path>
                  </svg>
                </span>
                <h6 className="uppercase text-sm text-slate-600 ">
                  You Receive
                </h6>
                {outKelpAmount ? (
                  outKelpAmount > 0 ? (
                    <span className="text-base font-bold text-slate-800">
                      {outKelpAmount}
                    </span>
                  ) : (
                    <span className="text-base">Wrong Input ...</span>
                  )
                ) : (
                  <span className="text-base">Loading ...</span>
                )}
              </li>
            </ol>

            {!hasApproved && paymentType === 'BUSD' ? (
              <button
                className="w-full uppercase  text-white font-medium bg-primary-400 hover:bg-primary-500 duration-300 transition-colors py-2.5 lg:py-3 rounded-lg"
                hidden = {!outKelpAmount || outKelpAmount <= 0}
                onClick={handleApprove}
              >
                {isLoadingApprove || isWriting ? 'Approving ...' : 'Approve'}
              </button>
            ) : (
              <button
                className="w-full uppercase  text-white font-medium bg-primary-400 hover:bg-primary-500 duration-300 transition-colors py-2.5 lg:py-3 rounded-lg"
                hidden = {!outKelpAmount || outKelpAmount <= 0}
                onClick={paymentType === 'BUSD' ? handleBUSDPurchase : handleBNBPurchase}
              >
                {isLoading || isWriting ? 'Loading ...' : 'Confirm Purchase'}
              </button>
            )}
            <button
              type="button"
              aria-label="close-btn"
              onClick={() => onHide(false)}
              className="absolute top-2 right-2 rounded-full p-1.5 hover:bg-slate-300/20"
            >
              <XMark className="w-5 h-5 text-slate-800" />
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default ConfirmPurchase;

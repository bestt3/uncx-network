"use client";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import config from "../../util/config";
import { useAccount } from "wagmi";
import useWeb3Functions from "../../hooks/useWeb3Functions";
import { toast } from "react-toastify";
import { setCurrentChain } from "../../store/presale";
import Loading from "../loading/Loading";
import { SelectTokenModal } from "../select-token-modal/SelectTokenModal";
import { ReferralModal } from "../referral-modal/ReferralModal";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Button from "../button/button";
import LoadingIcon from "@/app/icons/loading";
import styles from "./BuyForm.module.scss";
import classNames from "classnames";

const BuyForm = () => {
  const dispatch = useDispatch();
  // const { chain } = useNetwork();
  // const { switchNetwork, switchNetworkAsync } = useSwitchNetwork();

  const chainId = useSelector((state: RootState) => state.presale.chainId);
  const tokens = useSelector((state: RootState) => state.presale.tokens);
  const balances = useSelector((state: RootState) => state.wallet.balances);
  const tokenPrices = useSelector((state: RootState) => state.presale.prices);
  const estimate = useSelector((state: RootState) => state.presale.estimate);
  const userBal = useSelector((state: RootState) => state.presale.userBal);
  const phaseInfo = useSelector((state: RootState) => state.presale.phaseInfo);
  const phaseDetails = useSelector(
    (state: RootState) => state.presale.phaseDetails
  );
  const totalTokensSold = useSelector(
    (state: RootState) => state.presale.totalTokensSold
  );
  const activePhase = useSelector(
    (state: RootState) => state.presale.activePhase
  );
  const totalTokensForSale = useSelector(
    (state: RootState) => state.presale.totalTokensforSale
  );
  const minBuyLimit = useSelector(
    (state: RootState) => state.presale.minBuyLimit
  );
  const maxBuyLimit = useSelector(
    (state: RootState) => state.presale.maxBuyLimit
  );
  const tokenBalance = useSelector((state: RootState) => state.wallet.balances);
  const saleToken = config.saleToken;

  const [fromToken, setFromToken] = useState<Token>(tokens[chainId][0]);
  const [toToken, setToToken] = useState<Token>(
    saleToken[chainId as ChainId] as Token
  );

  const [fromValue, setFromValue] = useState<string | number>("");
  const [toValue, setToValue] = useState<string | number>("");
  const { openConnectModal } = useConnectModal();
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const [isSelectTokenModalOpen, setIsSelectTokenModalOpen] = useState(false);
  const {
    fetchIntialData,
    fetchLockedBalance,
    fetchTokenBalances,
    fetchMinMaxBuyLimits,
    buyToken,
    getEstimation,
    userBalance,
    getPhaseDetails,
    claimReward,
    userPhaseInfo,
    loading,
  } = useWeb3Functions();

  const { address, isConnected, chainId: chain } = useAccount();

  const phases = [
    {
      name: "Phase 1",
      value: phaseInfo.deservedBalance1?.toLocaleString(),
      color: "text-red-500",
      claimTime: "Claim in 60 days",
      isActive: activePhase == 1,
    },
    {
      name: "Phase 2",
      value: phaseInfo.deservedBalance2?.toLocaleString(),
      color: "text-red-500",
      claimTime: "Claim in 30 days",
      isActive: activePhase == 2,
    },
    {
      name: "Phase 3",
      value: phaseInfo.deservedBalance3?.toLocaleString(),
      color: "text-red-500",
      claimTime: "Claim in 30 days",
      claimNow: true,
      isActive: activePhase == 3,
    },
  ];

  const tokenPrice = useMemo(
    () => tokenPrices[config.displayPrice[chainId as ChainId]] || 1,
    [tokenPrices]
  );

  const fixedNumber = (num: number, decimals = 6) =>
    +parseFloat((+num).toFixed(decimals));

  const formatNumber = (num: number) =>
    Intl.NumberFormat().format(fixedNumber(num, 2));

  const soldPercentage = useMemo(
    () =>
      fixedNumber(
        ((totalTokensSold * tokenPrice + config.extraSoldAmount) /
          (totalTokensForSale * tokenPrice)) *
          100,
        2
      ) || 0,
    [totalTokensSold, totalTokensForSale, tokenPrice]
  );

  const lockedToken = useMemo(
    () => formatNumber(balances[toToken.symbol]),
    [balances]
  );

  const insufficientBalance = useMemo(() => {
    if (!fromValue) return false;
    return +fromValue > tokenBalance[fromToken.symbol];
  }, [fromValue, tokenBalance]);

  const fromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      emptyValues();
      return;
    }

    setFromValue(fixedNumber(+value));
    if (tokenPrices[fromToken.symbol] !== 0) {
      setToValue(fixedNumber(+value / tokenPrices[fromToken.symbol], 4));
    }
  };

  const toValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      emptyValues();
      return;
    }

    setToValue(fixedNumber(+value, 4));
    if (tokenPrices[fromToken.symbol] !== 0) {
      setFromValue(fixedNumber(+value * tokenPrices[fromToken.symbol]));
    }
  };

  const emptyValues = () => {
    setFromValue("");
    setToValue("");
  };
  const checkIfMinMaxAmount = () => {
    if (+toValue + +lockedToken > maxBuyLimit) {
      toast.error(
        `You have reached maximum amount for ${Intl.NumberFormat().format(
          maxBuyLimit
        )} ArtiCoin`
      );
      return false;
    }

    // if (+toValue < minBuyLimit) {
    //   toast.error(`Minimum amount is ${minBuyLimit} ARTI`);
    //   return false;
    // }

    return true;
  };

  const buyTokens = async () => {
    // event.preventDefault();

    if (+fromToken === 0) return;
    // if (!checkIfMinMaxAmount()) return;
    // if (chain?.unsupported) {
    //   await switchNetworkAsync?.(config.chains[0].id);
    // }

    try {
      await buyToken(fromValue, fromToken);
      await userBalance(address as `0x${string}`, BigInt(activePhase));
      emptyValues();
    } catch (error) {
      console.log(error);
    }
  };

  const claimRewards = async () => {
    // if (chain?.unsupported) {
    //   await switchNetworkAsync?.(config.chains[0].id);
    // }

    try {
      await claimReward(activePhase);
      await userBalance(address as `0x${string}`, BigInt(activePhase));
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   // if (!isPresaleStarted) return;
  //   if (!chain) return;
  //   if (chain.unsupported) switchNetwork?.(config.chains[0].id);
  //   dispatch(setCurrentChain(chain?.id || config.chains[0].id));
  // }, [chain]);
  useEffect(() => {
    if (fromValue === "") getEstimation("0");
    else getEstimation(String(fromValue));
  }, [fromValue]);

  useEffect(() => {
    // if (!isPresaleStarted) return;
    if (!address || !chain) return;
    // fetchLockedBalance();
    fetchTokenBalances();
    // fetchMinMaxBuyLimits();
    userBalance(address as `0x${string}`, BigInt(activePhase));
    userPhaseInfo(address);
  }, [address, chain, activePhase]);

  useEffect(() => {
    // if (!isPresaleStarted) return;
    fetchIntialData();
  }, []);

  useEffect(() => {
    if (activePhase == 0) return;
    getPhaseDetails(BigInt(activePhase));
  }, [activePhase]);

  return (
    <div className="relative mx-auto w-full max-w-lg rounded-3xl bg-[#1a2025]/70 backdrop-blur-xl">
      {loading && <Loading />}

      {!loading && (
        <div className="absolute -top-8 w-full">
          <p className="mx-10 rounded-2xl border-2 border-white/10 bg-gradient-to-t from-black/20 to-transparent py-4 text-center text-2xl backdrop-blur-3xl">
            Pre-Sale{" "}
            <span className="font-semibold text-green-500">
              {activePhase !== 0 ? "LIVE" : "NOT LIVE"}
            </span>
          </p>
        </div>
      )}
      <div className="mb-6 flex flex-col gap-6 px-5 pt-16 pb-6">
        <div
          className={`flex gap-4 rounded-xl border-2 border-transparent bg-[#232c3a]/50 py-2.5 pr-2.5 pl-6 ring-4 ring-transparent focus-within:border-primary/50 focus-within:ring-primary/20 ${
            insufficientBalance
              ? "!border-red-500/50 !text-red-400 !ring-red-500/20"
              : ""
          }`}
        >
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-sm">You send</label>
            <input
              className="w-full bg-transparent text-xl outline-none"
              type="number"
              step={0.0001}
              placeholder="0.0"
              value={fromValue}
              onChange={fromValueChange}
              min={0}
            />
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-[#2F3B4F] py-2.5 px-4 transition-opacity duration-200 hover:opacity-75"
            onClick={() => setIsSelectTokenModalOpen(true)}
          >
            <img
              src={fromToken.image}
              alt={fromToken.symbol}
              className="h-7 w-7 object-contain"
            />
            <span>{fromToken.symbol}</span>
            {/* <DownArrowIcon /> */}
          </button>
        </div>
        {/* {estimate > 0 && (
          <div className="flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#232c3a]/50 text-3xl font-bold">
              =
            </span>
            <span className="text-white/50">
              {fromValue} ETH = {estimate} DOBI
            </span>
          </div>
        )} */}
        <div className="flex gap-4 rounded-xl border-2 border-transparent bg-[#232c3a]/50 py-2.5 pr-2.5 pl-6 ring-4 ring-transparent focus-within:border-primary/50 focus-within:ring-primary/20">
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-sm">You get</label>
            <input
              type="number"
              value={insufficientBalance ? 0 : estimate}
              onChange={toValueChange}
              className="w-full bg-transparent text-xl outline-none"
              placeholder="0.0"
              step={0.0001}
              disabled
            />
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-[#2F3B4F] py-2.5 px-4 transition-opacity duration-200 hover:opacity-75"
            disabled
          >
            <img
              src={toToken.image}
              alt={toToken.symbol}
              className="h-7 w-7 object-contain"
            />

            <span>{toToken.symbol}</span>
          </button>
        </div>
        {insufficientBalance && (
          <p className="text-sm text-red-500">
            Oops! It looks like you don't have enough {fromToken.symbol} to pay
            for that transaction. Please reduce the amount of {fromToken.symbol}{" "}
            and try again.
          </p>
        )}
        <div className="-mx-5 h-0.5 bg-[#30353A]"></div>
        <div className="flex flex-col gap-2">
          <div className="flex items-end justify-between">
            <span>
              <span className="text-2xl">
                $
                {formatNumber(
                  totalTokensSold * tokenPrice + config.extraSoldAmount
                )}
                /
              </span>
              ${formatNumber(totalTokensForSale * tokenPrice)}
            </span>
            <span>{phaseDetails.progress?.toFixed(5)}%</span>
          </div>

          {isConnected && (
            <div className="rounded-lg p-4 shadow-md">
              <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className={`group relative mb-4 rounded-lg p-4 text-center md:mb-0 ${
                      phase.isActive ? "bg-white" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`text-lg font-bold ${
                        phase.isActive ? "text-gray-800" : "text-gray-400"
                      }`}
                    >
                      {phase.name}
                    </div>
                    <div
                      className={`mt-2 text-2xl font-bold ${
                        phase.isActive ? "text-gray-800" : "text-gray-400"
                      } md:text-3xl`}
                    >
                      {phase.value}
                    </div>
                    <div
                      className={`mt-2 text-lg font-bold ${
                        phase.isActive ? phase.color : "text-gray-400"
                      }`}
                    >
                      $PIKA
                    </div>
                    <div
                      className={`mt-1 text-sm ${
                        phase.isActive ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {phase.claimTime}
                    </div>
                  </div>
                ))}
              </div>
              <button className="mb-4 w-full rounded-lg bg-orange-500 py-3 text-center font-bold text-white">
                1 $DOBI = 1 $DOBI
              </button>
              <div className="flex flex-col justify-between sm:flex-row">
                <button
                  className="ring-offset-background focus-visible:ring-ring mb-2 inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded bg-green-500 py-2 px-4 text-sm font-bold text-white transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80 sm:mb-0 sm:mr-2"
                  onClick={claimRewards}
                  disabled={
                    userBal.availableBalance == 0 ||
                    (phaseDetails.claimStart !== undefined &&
                      Math.floor(new Date().getTime() / 1000) <
                        phaseDetails.claimStart)
                  }
                >
                  Claim $DOBI
                </button>
                <button className="ring-offset-background focus-visible:ring-ring inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded bg-blue-500 py-2 px-4 text-sm font-bold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80 sm:ml-2">
                  Claim Bonus
                </button>
              </div>
            </div>
          )}

          <style>
            {`
          @keyframes move {
            from { background-position: 0 0; }
            to { background-position: 30px 30px; }
          }
        `}
          </style>
          <div
            className={classNames(
              styles["progress"],
              "relative h-6 w-full rounded-2xl bg-[#d1d5db]"
            )}
          >
            <div
              className={styles["progress-bar"]}
              style={{
                width: `${phaseDetails.progress}%`,
              }}
            ></div>
          </div>
        </div>
        <p className="text-center text-sm font-medium uppercase text-[#D1D3FF]">
          {isConnected
            ? `you purchased ${userBal?.deservedBalance?.toLocaleString()} ${
                toToken.symbol
              } TOKENS`
            : `Connect your wallet to buy ${toToken.symbol}`}
        </p>
        <p className="text-center text-sm font-medium uppercase text-[#D1D3FF]">
          {isConnected &&
            `you claimed ${userBal?.claimBalance?.toLocaleString()} ${
              toToken.symbol
            } TOKENS`}
        </p>
        <div className="-mx-5 h-[2px] bg-[#30353A]"></div>
        {isConnected ? (
          <Button
            disabled={loading || insufficientBalance || fromValue == 0}
            onClick={buyTokens}
          >
            {loading && <LoadingIcon />}
            Buy Tokens
          </Button>
        ) : (
          <Button disabled={loading} onClick={openConnectModal}>
            {loading && <LoadingIcon />}
            Connect wallet
          </Button>
        )}
      </div>
      {isSelectTokenModalOpen && (
        <SelectTokenModal
          closeModal={() => setIsSelectTokenModalOpen(false)}
          selectToken={(token: Token) => {
            setFromToken(token);
            setFromValue("0");
            setToValue("0");
            setIsSelectTokenModalOpen(false);
          }}
        />
      )}
      {isReferralModalOpen && (
        <ReferralModal closeModal={() => setIsReferralModalOpen(false)} />
      )}
    </div>
  );
};

export default BuyForm;

import config from "../util/config";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import {
  setTokenPrice,
  setTotalTokensforSale,
  setTotalTokensSold,
  setMinBuyLimit,
  setMaxBuyLimit,
  setActivePhase,
  setEstimation,
  setUserBalance,
  setUserPhaseInfo,
  setPhaseDetails,
} from "../store/presale";
import { useMemo, useState } from "react";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { setBalance } from "../store/wallet";
import { toast } from "react-toastify";
// import { storeReferralTransaction, storeTransaction } from "../util/apis";
// import {
//   createPublicClient,
//   formatUnits,
//   getContract,
//   http,
//   // ethers.utils.parseUnits,
//   zeroAddress,
// } from "viem";
import { presaleAbi } from "../contracts/presaleABI";
import { RPC, erc20ABI } from "../contracts/erc20ABI";
import { ethers } from "ethers";
// const publicClient = createPublicClient({
//   chain: config.chains[0],
//   batch: { multicall: true },
//   transport: http(),
// });

const useWeb3Functions = () => {
  const chainId = useSelector((state: RootState) => state.presale.chainId);

  const [loading, setLoading] = useState(false);
  const tokens = useSelector((state: RootState) => state.presale.tokens);
  const activePhase = useSelector(
    (state: RootState) => state.presale.activePhase
  );
  const dispatch = useDispatch();
  const provider = usePublicClient();
  const { data: signer } = useWalletClient();
  const { address } = useAccount();
  const presaleContract = useMemo(
    () => {
      let provider = new ethers.providers.JsonRpcProvider(RPC);
      let contract;
      if (signer) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        contract = new ethers.Contract(
          config.presaleContract[chainId],
          presaleAbi,
          signer
        );
        return contract;
      }
      contract = new ethers.Contract(
        config.presaleContract[chainId],
        presaleAbi,
        provider
      );
      return contract;
    },
    // getContract({
    //   address: config.presaleContract[chainId],
    //   abi: presaleAbi,
    //   publicClient,
    //   walletClient: signer || undefined,
    // }),
    [signer, chainId]
  );

  const tokenContract = useMemo(
    () => {
      let provider = new ethers.providers.JsonRpcProvider(RPC);
      let contract;
      if (signer) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        contract = new ethers.Contract(
          config.saleToken[chainId].address as string,
          erc20ABI,
          signer
        );
        return contract;
      }
      contract = new ethers.Contract(
        config.presaleContract[chainId],
        presaleAbi,
        provider
      );
      return contract;
    },
    // getContract({
    //   address: config.presaleContract[chainId],
    //   abi: presaleAbi,
    //   publicClient,
    //   walletClient: signer || undefined,
    // }),
    [signer, chainId]
  );

  const fetchIntialData = async () => {
    // console.log("fetchIntialData");
    setLoading(true);

    // const [totalTokensSold, totalTokensforSale] = await Promise.all([
    //   presaleContract.totalTokensSold(),
    //   presaleContract.totalTokensforSale(),
    //   fetchTokenPrices(),
    // ]);
    const [activePhase] = await Promise.all([
      presaleContract.activePhase(),
      // presaleContract.totalTokensforSale(),
      // fetchTokenPrices(),
    ]);

    dispatch(setActivePhase(Number(activePhase)));
    // dispatch(setTotalTokensSold(+format(totalTokensSold)));
    // dispatch(setTotalTokensforSale(+format(totalTokensforSale)));

    setLoading(false);
  };

  const fetchMinMaxBuyLimits = async () => {
    // const [minBuyLimit, maxBuyLimit] = await Promise.all([
    //   presaleContract.minBuyLimit(),
    //   presaleContract.maxBuyLimit(),
    // ]);
    // dispatch(setMinBuyLimit(+format(minBuyLimit)));
    // dispatch(setMaxBuyLimit(+format(maxBuyLimit)));
  };

  const fetchTotalTokensSold = async () => {
    // const totalTokensSold = await presaleContract.totalTokensSold();
    // dispatch(setTotalTokensSold(+format(totalTokensSold)));
    // return totalTokensSold;
  };

  const fetchLockedBalance = async () => {
    if (!address) return;

    const { symbol, decimals } = config.saleToken[chainId];
    // const buyerAmount = await presaleContract.buyersAmount([address]);
    // const balance = ethers.utils.formatUnits(buyerAmount[0], decimals);

    // dispatch(setBalance({ symbol: symbol, balance }));

    // return balance;
  };

  const fetchTokenBalances = async () => {
    if (!address) return;

    for await (const token of tokens[chainId]) {
      let balance: any;
      if (token.address) {
        balance = await tokenContract.balanceOf(address);
      } else {
        balance = await provider?.getBalance({ address });
      }

      dispatch(
        setBalance({
          symbol: token.symbol,
          balance: Number(ethers.utils.formatUnits(balance, token.decimals)),
        })
      );
    }
  };

  const fetchTokenPrices = async () => {
    // for await (const token of tokens[chainId]) {
    //   const rate = token.address
    //     ? await presaleContract.tokenPrices([token.address])
    //     : await presaleContract.rate();
    //   dispatch(
    //     setTokenPrice({
    //       symbol: token.symbol,
    //       price: ethers.utils.formatUnits(rate, token.decimals),
    //     })
    //   );
    // }
  };

  const getEstimation = async (amount: string) => {
    const estimate = await presaleContract.estimatedToken(
      ethers.utils.parseUnits(amount, "18")
    );
    dispatch(setEstimation(Number(ethers.utils.formatUnits(estimate, "9"))));
  };

  const userBalance = async (address: `0x${string}`, phase: bigint) => {
    let deservedBalance: any = await presaleContract.deservedAmount(
      address,
      phase
    );
    let claimBalance: any = await presaleContract.claimedAmount(address, phase);
    deservedBalance = ethers.utils.formatUnits(deservedBalance, "9");
    claimBalance = ethers.utils.formatUnits(claimBalance, "9");
    const availableBalance = deservedBalance - claimBalance;
    dispatch(
      setUserBalance({ deservedBalance, claimBalance, availableBalance })
    );
  };

  const userPhaseInfo = async (address: `0x${string}`) => {
    let deservedBalance1: any = await presaleContract.deservedAmount(
      address,
      1
    );
    let deservedBalance2: any = await presaleContract.deservedAmount(
      address,
      2
    );
    let deservedBalance3: any = await presaleContract.deservedAmount(
      address,
      3
    );
    deservedBalance1 = ethers.utils.formatUnits(deservedBalance1, "9");
    deservedBalance2 = ethers.utils.formatUnits(deservedBalance2, "9");
    deservedBalance3 = ethers.utils.formatUnits(deservedBalance3, "9");
    dispatch(
      setUserPhaseInfo({ deservedBalance1, deservedBalance2, deservedBalance3 })
    );
  };

  const getPhaseDetails = async (phase: bigint) => {
    const detail = await presaleContract.phase(phase);

    const maxTokens = Number(ethers.utils.formatUnits(detail[1], "9"));
    const tokensSold = Number(ethers.utils.formatUnits(detail[2], "9"));
    const progress = (tokensSold / maxTokens) * 100;
    dispatch(
      setPhaseDetails({
        roundId: Number(detail[0]),
        maxTokens: maxTokens,
        tokensSold: tokensSold,
        fundsRaisedETH: Number(ethers.utils.formatUnits(detail[3], "9")),
        tokenPriceInUSD: Number(detail[4]),
        claimStart: Number(detail[5]),
        saleStatus: detail[6],
        progress: progress,
      })
    );
  };

  // const checkAllowance = async (
  //   token: Token,
  //   owner: Address,
  //   spender: Address
  // ) => {
  //   if (!token.address || !signer) return;

  //   const allowance = await publicClient.readContract({
  //     address: token.address,
  //     abi: erc20ABI,
  //     functionName: "allowance",
  //     args: [owner, spender],
  //   });

  //   if (!Number(allowance)) {
  //     const hash = await signer.writeContract({
  //       address: token.address,
  //       abi: erc20ABI,
  //       functionName: "approve",
  //       args: [
  //         spender,
  //         ethers.utils.parseUnits("9999999999999999999999999999", 18),
  //       ],
  //     });

  //     await publicClient.waitForTransactionReceipt({ hash });

  //     toast.success("Spend approved");
  //   }
  // };

  const buyToken = async (value: string | number, token: Token) => {
    let success = false;
    if (!address || !signer) return { success };

    setLoading(true);

    try {
      const amount = ethers.utils.parseUnits(`${value}`, token.decimals);
      let hash;

      // if (token.address) {
      //   await checkAllowance(token, address, config.presaleContract[chainId]);
      //   hash = await presaleContract.write.buyTokensEth([token.address, amount]);
      // } else {
      //   hash = await presaleContract.write.buyTokensEth([zeroAddress, amount], {
      //     value: amount,
      //   });
      // }
      hash = await presaleContract.buyTokensEth({
        value: amount,
      });
      await hash.wait();
      await userPhaseInfo(address);
      await getPhaseDetails(BigInt(activePhase));

      // const purchased_amount = token.address
      //   ? await presaleContract.getTokenAmount([token.address, amount])
      //   : await presaleContract.getTokenAmount([zeroAddress, amount]);

      // storeTransaction({
      //   wallet_address: address,
      //   purchased_amount: +format(purchased_amount),
      //   paid_amount: value,
      //   transaction_hash: hash,
      //   paid_with: token.symbol,
      // });

      // storeReferralTransaction({
      //   purchased_amount: +format(purchased_amount),
      //   paid: value,
      //   transaction_hash: hash,
      //   payable_token: token.symbol,
      // });

      fetchTokenBalances();
      fetchLockedBalance();
      fetchTotalTokensSold();

      toast.success(
        `You have successfully purchased $${config.saleToken[chainId].symbol} Tokens. Thank you!`
      );

      success = true;
    } catch (error: any) {
      console.log(error);
      if (
        error?.error?.code === -32603 &&
        error?.error?.message.includes("reverted")
      ) {
        toast.error(error.error.message?.replace("execution reverted:", ""));
      } else toast.error("Signing failed, please try again!");
    }

    setLoading(false);

    return { success };
  };

  const claimReward = async (phaseId: number) => {
    let success = false;
    if (!address || !signer) return { success };

    setLoading(true);

    try {
      const hash = await presaleContract.claim(phaseId);
      await hash.wait();
      toast.success(
        `You have successfully claimed $${config.saleToken[chainId].symbol} Tokens`
      );

      success = true;
    } catch (error: any) {
      console.log(error);
      if (
        error?.error?.code === -32603 &&
        error?.error?.message.includes("reverted")
      ) {
        toast.error(error.error.message?.replace("execution reverted:", ""));
      } else toast.error("Signing failed, please try again!");
    }

    setLoading(false);

    return { success };
  };

  const addTokenAsset = async (token: Token) => {
    if (!token.address || !signer) return;
    try {
      await signer.watchAsset({
        type: "ERC20",
        options: {
          address: token.address,
          symbol: token.symbol,
          decimals: token.decimals ?? 18,
          image: token.image.includes("http")
            ? token.image
            : `${window.location.origin}${token.image}`,
        },
      });
      toast.success("Token imported to metamask successfully");
    } catch (e) {
      toast.error("Token import failed");
    }
  };

  const parse = (value: string | number) =>
    ethers.utils.parseUnits(`${value}`, config.saleToken[chainId].decimals);

  const format = (value: bigint) =>
    ethers.utils.formatUnits(value, config.saleToken[chainId].decimals);

  return {
    loading,
    parse,
    format,
    buyToken,
    addTokenAsset,
    fetchIntialData,
    fetchLockedBalance,
    fetchTokenBalances,
    fetchMinMaxBuyLimits,
    getEstimation,
    userBalance,
    getPhaseDetails,
    claimReward,
    userPhaseInfo,
  };
};

export default useWeb3Functions;

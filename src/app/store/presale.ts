import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import config from "../util/config";

interface PresaleSlice {
  chainId: number;
  tokens: { [key: number]: Token[] };
  prices: { [key: string]: number };
  phaseDetails: Phase;
  totalTokensSold: number;
  activePhase: number;
  estimate: number;
  totalTokensforSale: number;
  isPresaleStarted: boolean;
  minBuyLimit: number;
  userBal: userBal;
  phaseInfo: phaseBal;
  maxBuyLimit: number;
}

interface Phase {
  roundId?: number;
  maxTokens?: number;
  tokensSold?: number;
  fundsRaisedETH?: number;
  tokenPriceInUSD?: number;
  claimStart?: number;
  saleStatus?: boolean;
  progress?: number;
}
interface userBal {
  deservedBalance?: number;
  claimBalance?: number;
  availableBalance?: number;
}
interface phaseBal {
  deservedBalance1?: number;
  deservedBalance2?: number;
  deservedBalance3?: number;
}

const initialState: PresaleSlice = {
  chainId: config.chains[0].id,
  tokens: config.whitelistedTokens,
  prices: {},
  totalTokensSold: 0,
  phaseDetails: {},
  activePhase: 0,
  estimate: 0,
  userBal: {},
  phaseInfo: {},
  totalTokensforSale: 0,
  minBuyLimit: 200,
  maxBuyLimit: 50_000,
  isPresaleStarted:
    config.presaleStartTime < Date.now() / 1000 ||
    new URLSearchParams(window?.location.search).get("version") == "2",
};

export const presaleSlice = createSlice({
  name: "presaleSlice",
  initialState,
  reducers: {
    setCurrentChain: (state, action: PayloadAction<number>) => {
      state.chainId = action.payload;
    },
    updateTokens: (state, action: PayloadAction<{ tokens: Token[] }>) => {
      state.tokens[state.chainId] = action.payload.tokens;
    },
    updateToken: (
      state,
      action: PayloadAction<{ index: number; token: Token }>
    ) => {
      state.tokens[state.chainId][action.payload.index] = action.payload.token;
    },
    setTokenPrice: (
      state,
      action: PayloadAction<{ symbol: string; price: number }>
    ) => {
      state.prices[action.payload.symbol] = action.payload.price;
    },
    setTotalTokensSold: (state, action: PayloadAction<number>) => {
      state.totalTokensSold = action.payload;
    },
    setActivePhase: (state, action: PayloadAction<number>) => {
      state.activePhase = action.payload;
    },
    setEstimation: (state, action: PayloadAction<number>) => {
      state.estimate = action.payload;
    },
    setUserBalance: (state, action: PayloadAction<userBal>) => {
      state.userBal = action.payload;
    },
    setUserPhaseInfo: (state, action: PayloadAction<phaseBal>) => {
      state.phaseInfo = action.payload;
    },
    setPhaseDetails: (state, action: PayloadAction<Phase>) => {
      state.phaseDetails = action.payload;
    },
    setTotalTokensforSale: (state, action: PayloadAction<number>) => {
      state.totalTokensforSale = action.payload;
    },
    setMinBuyLimit: (state, action: PayloadAction<number>) => {
      state.minBuyLimit = action.payload;
    },
    setMaxBuyLimit: (state, action: PayloadAction<number>) => {
      state.maxBuyLimit = action.payload;
    },
  },
});

export const {
  updateToken,
  updateTokens,
  setTokenPrice,
  setMaxBuyLimit,
  setMinBuyLimit,
  setCurrentChain,
  setTotalTokensSold,
  setActivePhase,
  setEstimation,
  setUserBalance,
  setUserPhaseInfo,
  setTotalTokensforSale,
  setPhaseDetails,
} = presaleSlice.actions;

export default presaleSlice.reducer;

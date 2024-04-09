import { bsc, bscTestnet, mainnet, sepolia } from "wagmi/chains";

const config = {
  chains: [sepolia],
  presaleStartTime: 1680912000,
  presaleContract: {
    // [sepolia.id]: "0x1d52ecf6860a38C78367479974bf6f120f7845D6",
    [sepolia.id]: "0xd92aC1294270B20Af1be52ecD169E484524A7515",
    [bsc.id]: "0x1d52ecf6860a38C78367479974bf6f120f7845D6",
    [mainnet.id]: "0x1d52ecf6860a38C78367479974bf6f120f7845D6",
  } as { [key: number]: Address }, // presale contract address

  saleToken: {
    [sepolia.id]: {
      // address: "0xf853b6a20368bA79fc64360B177E3273D4cf05e2", // your token address
      address: "0xB7D85e2DC6383c422A45E68d9b945d2E805b8624", // your token address
      symbol: "DOBI", // your token symbol
      name: "DobiFy", // your token name
      image: "/tokens/logo.svg", // your token image
      decimals: 9, // your token decimals
    },
    [bsc.id]: {
      address: "0xf853b6a20368bA79fc64360B177E3273D4cf05e2", // your token address
      symbol: "DOBI", // your token symbol
      name: "DobiFy", // your token name
      image: "/tokens/logo.svg", // your token image
      decimals: 9, // your token decimals
    },
    [mainnet.id]: {
      address: "0xf853b6a20368bA79fc64360B177E3273D4cf05e2", // token address
      symbol: "DOBI", // token symbol
      name: "DobiFy", // token name
      image: "/tokens/logo.svg", // token image
      decimals: 9, // token decimals
    },
  } as { [key: number]: Token },

  displayPrice: {
    [sepolia.id]: "USDT",
    [bsc.id]: "USDT",
    [mainnet.id]: "USDT",
  } as { [key: number]: string },

  extraSoldAmount: 0, // How much additionally you want to show as sold?

  whitelistedTokens: {
    [sepolia.id]: [
      {
        address: null,
        symbol: "ETH",
        name: "ETH",
        image: "/tokens/eth.svg",
        decimals: 18,
      },
      // {
      //   address: "0x7a7B1e43765a5BaC58e73f3c67CcB5548AC08408",
      //   symbol: "USDT",
      //   name: "Tether USD",
      //   image: "/tokens/eth.svg",
      //   decimals: 6,
      // },
    ],
    [bsc.id]: [
      {
        address: null,
        symbol: "BNB",
        name: "Binance Token",
        image: "/tokens/bnb.webp",
        decimals: 18,
      },

      // {
      //   address: "0x55d398326f99059fF775485246999027B3197955",
      //   symbol: "USDT",
      //   name: "Binance-Peg USD",
      //   image: "/tokens/usdt.webp",
      //   decimals: 18,
      // },
      // {
      //   address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      //   symbol: "BUSD",
      //   name: "Binance-Peg BUSD Token",
      //   image: "/tokens/busd.webp",
      //   decimals: 18,
      // },
      // {
      //   address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      //   symbol: "USDC",
      //   name: "Binance-Peg USD Coin",
      //   image: "/tokens/usdc.webp",
      //   decimals: 18,
      // },
    ],

    [mainnet.id]: [
      {
        address: null,
        symbol: "ETH",
        name: "ETH",
        image: "/tokens/eth.svg",
        decimals: 18,
      },
      {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        symbol: "USDT",
        name: "Tether USD",
        image: "/tokens/tethernew_32.webp",
        decimals: 6,
      },
    ],
  } as { [key: number]: Token[] },
};

export default config;

// import {
//   EthereumClient,
//   w3mConnectors,
//   w3mProvider,
// } from "@web3modal/ethereum";

// import { configureChains, createConfig } from "wagmi";
// import config from "./config";

// const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;
// // Wagmi client
// const { publicClient } = configureChains(config.chains, [
//   w3mProvider({ projectId }),
// ]);

// export const wagmiClient = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains: config.chains }),
//   publicClient,
// });

// // Web3Modal Ethereum Client
// export const ethereumClient = new EthereumClient(wagmiClient, config.chains);

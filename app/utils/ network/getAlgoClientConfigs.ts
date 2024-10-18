import {
  AlgoViteClientConfig,
  AlgoViteKMDConfig,
} from "../../interfaces/network";

export function getAlgodConfigFromViteEnvironment(): AlgoViteClientConfig {
  if (!process.env.NEXT_PUBLIC_VITE_ALGOD_SERVER) {
    throw new Error(
      "Attempt to get default algod configuration without specifying VITE_ALGOD_SERVER in the environment variables"
    );
  }

  return {
    server: process.env.NEXT_PUBLIC_VITE_ALGOD_SERVER,
    port: process.env.NEXT_PUBLIC_VITE_ALGOD_PORT || "443",
    token: process.env.NEXT_PUBLIC_VITE_ALGOD_TOKEN || "",
    network: process.env.NEXT_PUBLIC_VITE_ALGOD_NETWORK || "testnet",
  };
}

export function getIndexerConfigFromViteEnvironment(): AlgoViteClientConfig {
  if (!process.env.NEXT_PUBLIC_VITE_INDEXER_SERVER) {
    throw new Error(
      "Attempt to get default algod configuration without specifying VITE_INDEXER_SERVER in the environment variables"
    );
  }

  return {
    server: process.env.NEXT_PUBLIC_VITE_INDEXER_SERVER,
    port: process.env.NEXT_PUBLIC_VITE_INDEXER_PORT || "443",
    token: process.env.NEXT_PUBLIC_VITE_INDEXER_TOKEN || "",
    network: process.env.NEXT_PUBLIC_VITE_ALGOD_NETWORK || "testnet",
  };
}

export function getKmdConfigFromViteEnvironment(): AlgoViteKMDConfig {
  if (!process.env.NEXT_PUBLIC_VITE_KMD_SERVER) {
    throw new Error(
      "Attempt to get default kmd configuration without specifying VITE_KMD_SERVER in the environment variables"
    );
  }

  return {
    server: process.env.NEXT_PUBLIC_VITE_KMD_SERVER,
    port: process.env.NEXT_PUBLIC_VITE_KMD_PORT || "443",
    token: process.env.NEXT_PUBLIC_VITE_KMD_TOKEN || "",
    wallet: process.env.NEXT_PUBLIC_VITE_KMD_WALLET || "",
    password: process.env.NEXT_PUBLIC_VITE_KMD_PASSWORD || "",
  };
}

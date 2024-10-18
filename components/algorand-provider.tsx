import {
  getAlgodConfigFromViteEnvironment,
  getKmdConfigFromViteEnvironment,
} from "@/app/utils/ network/getAlgoClientConfigs";
import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { DaffiWalletConnect } from "@daffiwallet/connect";
import { PeraWalletConnect } from "@perawallet/connect";
import algosdk from "algosdk";
import {
  PROVIDER_ID,
  ProvidersArray,
  WalletProvider,
  useInitializeProviders,
} from "@txnlab/use-wallet";
import { SnackbarProvider } from "notistack";
let providersArray: ProvidersArray;
console.log(
  "process.env.VITE_ALGOD_NETWORK",
  process.env.NEXT_PUBLIC_VITE_ALGOD_NETWORK
);
if (process.env.NEXT_PUBLIC_VITE_ALGOD_NETWORK === "") {
  const kmdConfig = getKmdConfigFromViteEnvironment();
  providersArray = [
    {
      id: PROVIDER_ID.KMD,
      clientOptions: {
        wallet: kmdConfig.wallet,
        password: kmdConfig.password,
        host: kmdConfig.server,
        token: String(kmdConfig.token),
        port: String(kmdConfig.port),
      },
    },
  ];
} else {
  providersArray = [
    { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
    { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
    { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
    { id: PROVIDER_ID.EXODUS },
    // If you are interested in WalletConnect v2 provider
    // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
  ];
}
export const AlgorandProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const algodConfig = getAlgodConfigFromViteEnvironment();
  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: algodConfig.network,
      nodeServer: algodConfig.server,
      nodePort: String(algodConfig.port),
      nodeToken: String(algodConfig.token),
    },
    algosdkStatic: algosdk,
  });

  return (
    <SnackbarProvider maxSnack={3}>
      <WalletProvider value={walletProviders}>{children}</WalletProvider>
    </SnackbarProvider>
  );
};

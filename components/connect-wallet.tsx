import { Provider, useWallet } from "@txnlab/use-wallet";
import Account from "./account";
import { subtitle, title } from "./primitives";
import { Button } from "@nextui-org/button";

interface ConnectWalletInterface {
  openModal: boolean;
  closeModal: () => void;
}

const ConnectWallet = ({ openModal, closeModal }: ConnectWalletInterface) => {
  const { providers, activeAddress } = useWallet();

  const isKmd = (provider: Provider) =>
    provider.metadata.name.toLowerCase() === "kmd";

  return (
    <dialog
      id="connect_wallet_modal"
      className="border rounded-md px-4 py-2 mt-2"
      style={{ display: openModal ? "block" : "none" }}
    >
      <form method="dialog">
        <p className={subtitle({})}>Select wallet provider</p>

        <div className="grid m-2 pt-5 gap-2">
          {activeAddress && (
            <>
              <Account />
              <div className="divider" />
            </>
          )}

          {!activeAddress &&
            providers?.map((provider) => (
              <Button
                variant={"light"}
                className="flex items-center justify-between"
                data-test-id={`${provider.metadata.id}-connect`}
                key={`provider-${provider.metadata.id}`}
                onClick={() => {
                  return provider.connect();
                }}
              >
                {!isKmd(provider) && (
                  <img
                    alt={`wallet_icon_${provider.metadata.id}`}
                    src={provider.metadata.icon}
                    style={{
                      objectFit: "contain",
                      width: "30px",
                      height: "auto",
                    }}
                  />
                )}
                <span>
                  {isKmd(provider) ? "LocalNet Wallet" : provider.metadata.name}
                </span>
              </Button>
            ))}
        </div>

        <div className="modal-action grid">
          <Button
            variant={"ghost"}
            data-test-id="close-wallet-modal"
            onClick={() => {
              closeModal();
            }}
          >
            Close
          </Button>
          {activeAddress && (
            <Button
              variant={"shadow"}
              data-test-id="logout"
              onClick={() => {
                if (providers) {
                  const activeProvider = providers.find((p) => p.isActive);
                  if (activeProvider) {
                    activeProvider.disconnect();
                  } else {
                    // Required for logout/cleanup of inactive providers
                    // For instance, when you login to localnet wallet and switch network
                    // to testnet/mainnet or vice verse.
                    localStorage.removeItem("txnlab-use-wallet");
                    window.location.reload();
                  }
                }
              }}
            >
              Logout
            </Button>
          )}
        </div>
      </form>
    </dialog>
  );
};
export default ConnectWallet;

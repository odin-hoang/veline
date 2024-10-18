import { useWallet } from "@txnlab/use-wallet";
import ConnectWallet from "./connect-wallet";
import { useState } from "react";
import Transact from "./transact";
import { Button } from "@nextui-org/button";

interface Props {}

const ConnectButton: React.FC<Props> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false);
  const [addCallsDemoModal, setAddCallsDemoModal] = useState<boolean>(false);
  const { activeAddress } = useWallet();

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal);
  };

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal);
  };

  const toggleAppCallsModal = () => {
    setAppCallsDemoModal(!appCallsDemoModal);
  };

  const toggleAddCallsModal = () => {
    setAddCallsDemoModal(!addCallsDemoModal);
  };

  return (
    <div className="">
      <div className="">
        <Button
          data-test-id="connect-wallet"
          className=""
          onClick={toggleWalletModal}
        >
          Connect Wallet
        </Button>

        {activeAddress && (
          <button
            data-test-id="transactions-demo"
            className="btn m-2"
            onClick={toggleDemoModal}
          >
            Transactions Demo
          </button>
        )}

        {activeAddress && (
          <button
            data-test-id="appcalls-demo"
            className="btn m-2"
            onClick={toggleAppCallsModal}
          >
            Contract Interactions Demo
          </button>
        )}

        {activeAddress && (
          <button
            data-test-id="addcalls-demo"
            className="btn m-2"
            onClick={toggleAddCallsModal}
          >
            Add Calls Demo
          </button>
        )}
      </div>

      <ConnectWallet
        openModal={openWalletModal}
        closeModal={toggleWalletModal}
      />
      {/* <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} /> */}
      {/* <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
          <AddCalls openModal={addCallsDemoModal} setModalState={setAddCallsDemoModal} /> */}
    </div>
  );
};

export default ConnectButton;

import { MouseEventHandler } from "react";

interface Props {
  connectMetamask: MouseEventHandler;
}

const ConnectWalletButton = ({ connectMetamask }: Props) => {
  return (
    <button
      className="px-4 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xl rounded-md m-4"
      onClick={connectMetamask}
    >
      Connect wallet
    </button>
  );
};
export default ConnectWalletButton;

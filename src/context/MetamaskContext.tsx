import React, { MouseEventHandler } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

interface MetamaskContextInterface {
  connectMetamask: MouseEventHandler;
  walletState: {
    address: string;
    isConnect: boolean;
    balance: string;
  };
}

export const MetaMaskContext = React.createContext<MetamaskContextInterface>({
  connectMetamask: () => {},
  walletState: {
    address: "",
    isConnect: false,
    balance: "0",
  },
});

interface ProviderProps {
  children?: React.ReactNode;
}

export const MetaMaskProvider = ({ children }: ProviderProps) => {
  const [walletState, setWalletState] = React.useState<{
    address: string;
    isConnect: boolean;
    balance: string;
  }>({ address: "", isConnect: false, balance: "0" });
  const connectMetamask: MouseEventHandler = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const gweiBalance = (await signer.getBalance()).toString();
      const balanceInEth = ethers.utils.formatEther(gweiBalance);
      setWalletState({
        address: await signer.getAddress(),
        isConnect: true,
        balance: balanceInEth.toString() ,
      });
    } else {
      console.log("Metamask not detect");
    }
  };

  return (
    <MetaMaskContext.Provider value={{ connectMetamask, walletState }}>
      {children}
    </MetaMaskContext.Provider>
  );
};

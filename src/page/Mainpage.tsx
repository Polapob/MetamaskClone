import { useCallback, useContext, useState } from "react";
import AddAddressButton from "../components/Mainpage/AddAddressButton";
import ConnectWalletButton from "../components/Mainpage/ConnectWalletButton";
import CryptoTable from "../components/Mainpage/CryptoTable";
import { MetaMaskContext } from "../context/MetamaskContext";
import CoinInterface from "../interface/CoinInterface";
import { Coins } from "../state/SelectedCoins";
import { autorun, observable, toJS } from "mobx";
import { observer } from "mobx-react"
;

interface Props {
  selectedCoins: Array<CoinInterface>;
}

const Mainpage = observer(({ selectedCoins }: Props) => {
  const { connectMetamask, walletState } = useContext(MetaMaskContext);
  //const [selectCoins, setSelectCoins] = useState<Array<CoinInterface>>([]);
 /* const addSelectCoins = useCallback((addedCoin: CoinInterface) => {
    setSelectCoins((prevCoin) => [...prevCoin, addedCoin]);
  }, []); */
  // console.log("selected coins = ",toJS(selectedCoins.getCoins()));

  return (
    <div className="flex justify-center items-center flex-col m-3 gap-y-2 w-full ">
      <div className="font-bold text-2xl">Connect to the Wallet</div>
      {walletState.isConnect ? (
        <div className="flex justify-center flex-col items-center gap-y-2 w-3/4">
          <div className="text-2xl">Address {walletState.address}</div>
          <div className="text-2xl">Balance {walletState.balance}</div>
          <AddAddressButton  />
          <CryptoTable selectedCoins={selectedCoins} />
        </div>
      ) : (
        <ConnectWalletButton connectMetamask={connectMetamask} />
      )}
    </div>
  );
});

export default Mainpage;

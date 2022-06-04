import { ethers } from "ethers";
import {
  useState,
  useContext,
  useCallback,
  MouseEventHandler,
  MouseEvent,
} from "react";
import Abi from "../../abi";
import { MetaMaskContext } from "../../context/MetamaskContext";
import CoinInterface from "../../interface/CoinInterface";
import ModalDataInterface from "../../interface/ModalDataInterface";

const useCreateAddressModal = (
  handleOnClose: MouseEventHandler,
  addSelectCoins: (addedCoin: CoinInterface) => void
) => {
  const [data, setData] = useState<{
    address: string;
    decimal: string;
    symbol: string;
  }>({ address: "", decimal: "", symbol: "" });
  const [isPress, setIsPress] = useState<boolean>(false);
  const { walletState } = useContext(MetaMaskContext);
  const handleDataChange = useCallback((data: ModalDataInterface) => {
    setData(data);
  }, []);
  const toggleButtonPress = () => {
    setIsPress((prevState) => !prevState);
  };
  const closeModal = useCallback(
    (event: MouseEvent) => {
      handleOnClose(event);
      toggleButtonPress();
    },
    [handleOnClose]
  );
  const handleOnSave: MouseEventHandler = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(data.address, Abi, provider);
      handleOnClose(event);
      const name = await contract.name();
      const balance = await contract.balanceOf(walletState.address);
      const valueOwn = balance * 10 ** -data.decimal;
      addSelectCoins({
        name,
        symbol: data.symbol,
        valueOwn: valueOwn.toString(),
        address: data.address,
        decimal: parseInt(data.decimal),
      });
      toggleButtonPress();
    } catch (err) {}
  };
  return [handleDataChange,closeModal,handleOnSave,isPress,data] as const;
};
export default useCreateAddressModal;

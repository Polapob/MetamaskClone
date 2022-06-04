import { ethers } from "ethers";
import {
  useState,
  useContext,
  useCallback,
  MouseEventHandler,
  MouseEvent,
} from "react";
import { MetaMaskContext } from "../../context/MetamaskContext";
import AddressDataInterface from "../../interface/AddressDataInterface";
import ModalDataInterface from "../../interface/ModalDataInterface";
import { selectedCoins } from "../../state/SelectedCoins";

const useCreateAddressModal = (
  handleOnClose: MouseEventHandler,
) => {
  const [data, setData] = useState<AddressDataInterface>({
    address: "",
    decimal: "",
    symbol: "",
  });
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
    handleOnClose(event);
    await selectedCoins.addCoin(walletState.address, data);
    toggleButtonPress();
    console.log(selectedCoins.getCoins());
  };
  return [
    handleDataChange,
    closeModal,
    handleOnSave,
    isPress,
    data,
  ] as const;
};
export default useCreateAddressModal;

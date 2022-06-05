import { ethers } from "ethers";
import { useState, useCallback, MouseEventHandler, MouseEvent } from "react";
import Abi from "../../abi";

const useCreateTransferModal = (
  handleOnClose: MouseEventHandler,
  tokenAddress: string,
  decimal: number
) => {
  const [data, setData] = useState<{
    transferAddress: string;
    amount: string;
  }>({ transferAddress: "", amount: "" });
  const [isPress, setIsPress] = useState<boolean>(false);

  const handleDataChange = useCallback((title: string, data: string) => {
    setData((prevData) => ({ ...prevData, [title]: data }));
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

  const handleOnSave: MouseEventHandler = async (event) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const valueSend = ethers.utils.parseUnits(data.amount, decimal);
      const contract = new ethers.Contract(tokenAddress, Abi, provider);
      const contractWithSigner = contract.connect(signer);
      await contractWithSigner.transfer(data.transferAddress, valueSend);
      closeModal(event);
    } catch (err) {
     // closeModal(event);
     console.log(err);
    }
  };
  return [handleDataChange, handleOnSave, closeModal, data, isPress] as const;
};
export default useCreateTransferModal;

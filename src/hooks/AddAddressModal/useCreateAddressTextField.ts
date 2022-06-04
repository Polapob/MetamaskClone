import { ethers } from "ethers";
import { useState, ChangeEventHandler, ChangeEvent, useEffect } from "react";
import Abi from "../../abi";
import ModalDataInterface from "../../interface/ModalDataInterface";

const useCreateAddressTextField = (
  handleDataChange: (data: ModalDataInterface) => void,
  isPress: boolean
) => {
  const [address, setAddress] = useState<string>("");

  const handleTextChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setAddress(event.target.value);
  };

  useEffect(() => {
    setAddress("");
    handleDataChange({
      address: "",
      decimal: "",
      symbol: "",
    });
  }, [isPress, handleDataChange]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        if (address) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(address, Abi, provider);
          const symbol = await contract.symbol();
          const decimal = await contract.decimals();
          handleDataChange({
            address: address,
            decimal: decimal.toString(),
            symbol: symbol,
          });
        }
      } catch (err) {
        console.log(err);
        handleDataChange({ address: address, decimal: "", symbol: "" });
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [address, handleDataChange]);

  return [handleTextChange,address] as const ;
};
export default useCreateAddressTextField;

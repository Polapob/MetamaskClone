import { ethers } from "ethers";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Abi from "../../abi";
import useCreateAddressTextField from "../../hooks/AddAddressModal/useCreateAddressTextField";
import ModalDataInterface from "../../interface/ModalDataInterface";

interface Props {
  handleDataChange: (data: ModalDataInterface) => void;
  isPress: boolean;
}

const AddressTextField = ({ handleDataChange, isPress }: Props) => {
  const [handleTextChange, address] = useCreateAddressTextField(
    handleDataChange,
    isPress
  );
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="font-bold text-[18px] select-none">Address</div>
      <input
        className="border-2 focus:outline-none border-black p-2 w-full"
        onChange={handleTextChange}
        value={address}
      />
    </div>
  );
};
export default AddressTextField;

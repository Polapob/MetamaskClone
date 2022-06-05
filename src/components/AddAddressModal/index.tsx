import {
  MouseEventHandler,
  memo,
} from "react";
import AddressTextField from "./AddressTextField";
import DisabledTextField from "./DisabledTextField";
import CloseIcon from "../Mainpage/CloseIcon";
import useCreateAddressModal from "../../hooks/AddAddressModal/useCreateAddressModal";

interface Props {
  isOpen: boolean;
  handleOnClose: MouseEventHandler;
}

const AddAddressModal = ({ isOpen, handleOnClose }: Props) => {
  const [handleDataChange, closeModal, handleOnSave, isPress, data] =
    useCreateAddressModal(handleOnClose);
  return (
    <div
      className={`fixed ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center h-screen inset-0 p-12 bg-gray-700 bg-opacity-50`}
    >
      <div className="p-16 bg-white flex flex-col justify-center items-center gap-y-2 min-w-[500px] relative">
        <CloseIcon closeModal={closeModal} />
        <div className="font-bold text-2xl mb-3">Add Coin Address</div>
        <AddressTextField
          handleDataChange={handleDataChange}
          isPress={isPress}
        />
        <DisabledTextField title="Coin Symbol" text={data.symbol} />
        <DisabledTextField title="Decimal" text={data.decimal} />
        <button
          className="mt-4 text-xl p-3 w-full rounded-md font-bold bg-blue-500 text-white hover:bg-blue-400 disabled:bg-gray-400"
          onClick={handleOnSave}
          disabled={!(data.decimal || data.symbol)}
        >
          Save Crypto
        </button>
      </div>
    </div>
  );
};
export default memo(AddAddressModal);

import { MouseEventHandler } from "react";
import TextField from "./TextField";
import CloseIcon from "../Mainpage/CloseIcon";
import useCreateTransferModal from "../../hooks/TransferModal/useCreateTransferModal";

interface Props {
  isOpen: boolean;
  handleOnClose: MouseEventHandler;
  tokenAddress: string;
  decimal: number;
}

const TransferModal = ({
  isOpen,
  handleOnClose,
  tokenAddress,
  decimal,
}: Props) => {
  const [handleDataChange, handleOnSave, closeModal, data, isPress] =
    useCreateTransferModal(handleOnClose, tokenAddress, decimal);
  return (
    <div
      className={`fixed ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center h-screen inset-0 p-12 bg-gray-700 bg-opacity-50`}
    >
      <div className="p-16 bg-white flex flex-col justify-center items-center gap-y-2 min-w-[500px] relative">
        <CloseIcon closeModal={closeModal} />
        <div className="font-bold text-2xl mb-3">Transfer Coin To</div>
        <TextField
          title="Receiver Address"
          handleDataChange={handleDataChange}
          dataTitle="transferAddress"
          isPress={isPress}
        />
        <TextField
          title="Amount"
          handleDataChange={handleDataChange}
          dataTitle="amount"
          isPress={isPress}
        />
        <button
          className="mt-8 text-xl p-3 w-full rounded-md font-bold bg-blue-500 text-white hover:bg-blue-400 disabled:bg-gray-400"
          onClick={handleOnSave}
          disabled={!(data.amount || data.transferAddress)}
        >
          Confirm Transaction
        </button>
      </div>
    </div>
  );
};
export default TransferModal;

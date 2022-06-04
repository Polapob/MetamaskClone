import { useState,memo } from "react";
import CoinInterface from "../../interface/CoinInterface";
import AddAddressModal from "../AddAddressModal";

interface Props {
  addSelectCoins: (addedCoin: CoinInterface) => void;
}

const AddAddressButton = ({ addSelectCoins }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <button
        className="text-2xl border-2 p-3 rounded-md font-bold bg-blue-500 text-white hover:bg-blue-400"
        onClick={handleOpenModal}
      >
        Add Address
      </button>
      <AddAddressModal
        isOpen={openModal}
        handleOnClose={handleCloseModal}
        addSelectCoins={addSelectCoins}
      />
    </>
  );
};
export default memo(AddAddressButton);

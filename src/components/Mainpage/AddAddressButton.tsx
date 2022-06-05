import { useState,memo } from "react";
import AddAddressModal from "../AddAddressModal";


const AddAddressButton = () => {
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
      />
    </>
  );
};
export default memo(AddAddressButton);

import { useState, memo } from "react";
import CoinInterface from "../../interface/CoinInterface";
import TransferModal from "../TransferModal";

interface Props {
  eachCoin: CoinInterface;
}
const CryptoRow = ({ eachCoin }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const valueShown = (
    Math.round(10 ** (eachCoin.decimal-10) * parseFloat(eachCoin.valueOwn)) *
    10 ** (10-eachCoin.decimal)
  ).toString();

  return (
    <div className="grid grid-cols-4 justify-center w-full items-center">
      <div className="font-bold font-xl">{eachCoin.name}</div>
      <div className="font-bold font-xl">{eachCoin.symbol}</div>
      <div className="font-bold font-xl">{`${
        valueShown
      } ${eachCoin.symbol.toLowerCase()}`}</div>
      <button
        className="border px-4 py-2 font-bold font-xl rounded-md bg-blue-500 hover:bg-opacity-80 text-white w-2/3"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Transfer Crypto
      </button>
      <TransferModal
        isOpen={openModal}
        handleOnClose={() => {
          setOpenModal(false);
        }}
        tokenAddress={eachCoin.address}
        decimal={eachCoin.decimal}
      />
    </div>
  );
};
export default memo(CryptoRow);

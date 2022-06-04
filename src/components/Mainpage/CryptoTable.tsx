import CoinInterface from "../../interface/CoinInterface";
import CryptoRow from "./CryptoRow";

interface Props {
  selectCoins: Array<CoinInterface>;
}

const CryptoTable = ({ selectCoins }: Props) => {
  return (
    <div className="w-full gap-y-2 flex flex-col justify-center items-center my-8">
      <>
        {selectCoins.length > 0 && (
          <div className="grid grid-cols-4 w-full font-bold text-2xl">
            <div>Token Name</div>
            <div>Symbol</div>
            <div>Balance</div>
          </div>
        )}
        {selectCoins.map((eachCoin: CoinInterface, key: number) => {
          return <CryptoRow key={key} eachCoin={eachCoin} />;
        })}
      </>
    </div>
  );
};
export default CryptoTable;

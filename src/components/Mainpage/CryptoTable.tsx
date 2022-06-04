import { autorun, toJS } from "mobx";
import { observer } from "mobx-react-lite";
import CoinInterface from "../../interface/CoinInterface";
import { selectedCoins } from "../../state/SelectedCoins";
import CryptoRow from "./CryptoRow";

interface Props {
  selectedCoins: Array<CoinInterface>;
}

const CryptoTable = observer(({selectedCoins}:Props) => {
  autorun(()=>{
    console.log(toJS(selectedCoins));
  })
  return (
    <div className="w-full gap-y-2 flex flex-col justify-center items-center my-8">
      <>
        {selectedCoins.length > 0 && (
          <div className="grid grid-cols-4 w-full font-bold text-2xl">
            <div>Token Name</div>
            <div>Symbol</div>
            <div>Balance</div>
          </div>
        )}
        {selectedCoins.map((eachCoin: CoinInterface, key: number) => {
          return <CryptoRow key={key} eachCoin={eachCoin} />;
        })}
      </>
    </div>
  );
});
export default CryptoTable;

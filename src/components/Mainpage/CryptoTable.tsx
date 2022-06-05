import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import CoinInterface from "../../interface/CoinInterface";
import { selectedCoins } from "../../state/SelectedCoins";
import CryptoRow from "./CryptoRow";

const CryptoTable = observer(() => {
  return (
    <div className="w-full gap-y-2 flex flex-col justify-center items-center my-8">
      <>
        {toJS(selectedCoins.getCoins()).length > 0 && (
          <div className="grid grid-cols-4 w-full font-bold text-2xl">
            <div>Token Name</div>
            <div>Symbol</div>
            <div>Balance</div>
          </div>
        )}
        {toJS(selectedCoins.getCoins()).map(
          (eachCoin: CoinInterface, key: number) => {
            return <CryptoRow key={key} eachCoin={eachCoin} />;
          }
        )}
      </>
    </div>
  );
});
export default CryptoTable;

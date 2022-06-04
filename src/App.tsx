import "./App.css";
import { MetaMaskProvider } from "./context/MetamaskContext";
import Mainpage from "./page/Mainpage";
import { selectedCoins } from "./state/SelectedCoins";
import { observer } from "mobx-react";
import { toJS } from "mobx";
//import {useObserver} from
const App = observer(() => {
  return (
    <MetaMaskProvider>
      <Mainpage selectedCoins={toJS(selectedCoins.getCoins())} />
    </MetaMaskProvider>
  );
});

export default App;

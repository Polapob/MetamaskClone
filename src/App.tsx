import "./App.css";
import { MetaMaskProvider } from "./context/MetamaskContext";
import Mainpage from "./page/Mainpage";
import { observer } from "mobx-react";
const App = observer(() => {
  return (
    <MetaMaskProvider>
      <Mainpage />
    </MetaMaskProvider>
  );
});

export default App;

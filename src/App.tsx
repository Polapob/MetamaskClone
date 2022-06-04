import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MetaMaskProvider } from "./context/MetamaskContext";
import Mainpage from "./page/Mainpage";

function App() {
  return (
    <MetaMaskProvider>
      <Mainpage />
    </MetaMaskProvider>
  );
}

export default App;

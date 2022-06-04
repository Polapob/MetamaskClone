import {
  observable,
  action,
  flow,
  computed,
  makeAutoObservable,
  autorun,
} from "mobx";
import CoinInterface from "../interface/CoinInterface";
import AddressDataInterface from "../interface/AddressDataInterface";
import { ethers } from "ethers";
import Abi from "../abi";

interface ICoin {
  coins: Array<CoinInterface>;
}
export class Coins implements ICoin {
  coins: Array<CoinInterface>;
  constructor() {
    makeAutoObservable(this, {
      coins: observable,
      addCoin: action,
      getCoins: action,
    });
    this.coins = [];
  }
  getCoins() {
    return this.coins;
  }
  addCoin = flow(function* (
    this: Coins,
    walletAddress: string,
    coinData: AddressDataInterface
  ) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(coinData.address, Abi, provider);
      const name = yield contract.name();
      const balance = yield contract.balanceOf(walletAddress);
      const valueOwn = (balance * 10 ** -coinData.decimal).toString();

      this.coins.push({
        name,
        symbol: coinData.symbol,
        address: coinData.address,
        decimal: parseInt(coinData.decimal),
        valueOwn,
      });
    } catch (error) {}
  });
}

export const selectedCoins = new Coins();

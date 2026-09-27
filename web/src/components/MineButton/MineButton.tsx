import { useContext, useState } from "react";
import Gem from "../../assets/Gem.png";
import "./MineButton.css";
import { StateContext } from "../../context/StateContext";

type FloatingCoin = {
  id: number;
  amount: number;
};

export default function MineButton() {
  const [coins, setCoins] = useState<FloatingCoin[]>([]);
  const {setBalance} = useContext(StateContext);
  const gpc = 1;
  function mine() {
    const id = Date.now();
    setBalance((balance: number) => balance + gpc);
    setCoins((current) => [
      ...current,
      {
        id,
        amount: gpc,
      },
    ]);

    setTimeout(() => {
      setCoins((current) => current.filter((coin) => coin.id !== id));
    }, 700);
  }

  return (
    <div className="mine-container">
      <button className="mine-button" type="button" onClick={mine}>
        <img src={Gem} alt="Mine" />
      </button>

      {coins.map((coin) => (
        <span key={coin.id} className="floating-coin">
          +{coin.amount}
        </span>
      ))}
    </div>
  );
}
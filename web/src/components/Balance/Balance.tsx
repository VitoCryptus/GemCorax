import { useContext } from "react"
import Gem from "../../assets/Gem.png";
import "./Balance.css";
import { StateContext } from "../../context/StateContext";

export default function Balance() {

  const {balance} = useContext(StateContext);

  return <div className="balance-monitor">
    <div>x{balance}</div>
    <img src={Gem} alt="Balance" />
  </div>
}
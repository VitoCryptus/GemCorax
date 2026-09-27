import Gem from "../../assets/Gem.png";
import "./MineButton.css";

export default function MineButton() {
  return (
    <button className="mine-button" type="button">
      <img src={Gem} alt="Mine" />
    </button>
  );
}
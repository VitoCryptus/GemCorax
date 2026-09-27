import Balance from "../Balance/Balance.tsx";
import MineButton from "../MineButton/MineButton.tsx";
import "./Mine.css";
import { StateContext } from "../../context/StateContext.ts";
import { useState } from "react";

export default function Mine() {
  const [balance, setBalance] = useState(0);
  return (
    <div className="mine-panel">
      <StateContext value={{ balance, setBalance }}>
        <Balance />
        <MineButton />
      </StateContext>
    </div>
  );
}

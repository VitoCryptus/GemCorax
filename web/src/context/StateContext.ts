import { createContext } from "react";

type SetBalance = (value: number | ((prev: number) => number)) => void;

interface BalanceContextType {
  balance: number,
  setBalance: SetBalance
}

export const StateContext = createContext<BalanceContextType>({
  balance: 0,
  setBalance: () => {}
});
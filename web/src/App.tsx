import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
// import MineButton from "./components/MineButton/MineButton.tsx";
import Mine from "./components/Mine/Mine.tsx";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Mine/>
    </div>
  );
}

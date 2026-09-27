import GemLogo from "../../assets/GemLogo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <img className="gem-logo" src={GemLogo} alt="gem" title="gem" />
      <ul className="navbar-list">
        <li>Gem Lads</li>
        <li>Goals</li>
        <li>Team</li>
        <li>Gems</li>
      </ul>
    </nav>
  );
}

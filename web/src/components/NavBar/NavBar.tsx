import GemGreenLogo from "../../assets/GemGreenLogo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <img className="gem-logo" src={GemGreenLogo} alt="Gem" title="Gem" />
      <ul className="navbar-list">
        <li>Goals</li>
        <li>Team</li>
        <li>Manifesto</li>
        <li>About</li>
      </ul>
      <p className="connect-button">Connect</p>
    </nav>
  );
}

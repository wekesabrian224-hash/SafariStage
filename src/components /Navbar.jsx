import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <link to="/" className="logo">
        SafariStage
      </link>

      <div className="nav-links">
        <link to="/">Home</link>
        <link to="/explore">Explore stages</link>
        <link to="/routes">Routes</link>
        <link to="/about">About</link>
      </div>
    </nav>
  );
}

export default Navbar;

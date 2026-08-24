import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* SafariStage logo */}
      <Link to="/" className="logo">
        SafariStage
      </Link>

      {/* Navigation links */}
      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/explore">Explore Stages</Link>

        <Link to="/routes">Routes</Link>

        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

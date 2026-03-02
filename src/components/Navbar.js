import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./cssfiles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>Sidarth Dongre</Link>
      </h2>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleNavClick("experience")}>Experience</button>
        <button onClick={() => handleNavClick("projects")}>Projects</button>
        <button onClick={() => handleNavClick("skills")}>Skills</button>
        <button onClick={() => handleNavClick("about")}>About</button>
        <button onClick={() => handleNavClick("contact")}>Contact</button>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
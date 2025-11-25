import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO / NAME */}
        <h1 className="nav-logo">Quincy</h1>

        {/* HAMBURGER ICON */}
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
        </div>

        {/* NAV LINKS */}
        <ul className={open ? "nav-links open" : "nav-links"}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

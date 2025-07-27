import React, { useState } from "react";
import "./../Assets/CSS/header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from "./../Assets/img/logo/logo2_transparent.png";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const links = [
    { path: "/about", label: "About" },
    { path: "/scriptpak", label: "ScriptPak™" },
    { path: "/scriptweb", label: "ScriptWeb™" },
    { path: "/scriptinject", label: "ScriptInject™" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} width={150} />
      </NavLink>

      {/* Desktop Nav */}
      <nav className="nav-links">
        <NavLink
          style={{ marginLeft: "260px" }}
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          About
        </NavLink>
        <NavLink
          to="/scriptpak"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          ScriptPak™
        </NavLink>
        <NavLink
          to="/scriptweb"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          ScriptWeb™
        </NavLink>
        <NavLink
          to="/scriptinject"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          ScriptInject™
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          FAQ
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Contact
        </NavLink>
      </nav>

      <button className="login-btn" onClick={() => handleNavigation("/login")}>
        Log In
      </button>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <NavLink to="/" onClick={toggleMenu} className="logo">
              <img src={logo} width={150} height={150} />
            </NavLink>
            <span className="close-icon" onClick={toggleMenu}>
              ✖
            </span>
          </div>

          <div className="mobile-links">
            {links.map((link) => (
              <button
                key={link.path}
                className={`link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={() => handleNavigation(link.path)}
              >
                {link.label}
              </button>
            ))}

            <button
              className={`login-btn-2 ${
                location.pathname === "/login" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/login")}
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

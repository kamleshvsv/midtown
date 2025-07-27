// Footer.tsx
import React from "react";
import "./../Assets/CSS/footer.css";
import logo from "./../Assets/img/logo/logo2_transparent.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <p>
          The path to a better Specialized Pharmacy experience
          begins with <span className="footer-logo"
          onClick={() => navigate("/")}><img src={logo} /></span>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-left">Power to the patients.™</div>
        <ul className="footer-menu">
             <li> <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >About</NavLink>
        
        </li>
          <li> <NavLink 
          to="/scriptpak" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >ScriptPak™</NavLink>
        
        </li>
           <li> <NavLink 
          to="/scriptweb" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >ScriptWeb™</NavLink>
        
        </li>
           <li> <NavLink 
          to="/scriptinject" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >ScriptInject™</NavLink>
        
        </li>
        <li> <NavLink 
          to="/faq" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >FAQ</NavLink>
        
        </li>
        <li> <NavLink 
          to="/contact" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >Contact</NavLink>
        
        </li>
        
        <li> <NavLink 
          to="/login" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >Login</NavLink>
        
        </li>
        
        <li> <NavLink 
          to="/privacy-terms-of-service" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >Privacy & Terms of Service</NavLink>
        
        </li>
        </ul>
      </div>
    </footer>
  );
}

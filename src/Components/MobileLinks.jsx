import { useLocation, useNavigate } from "react-router-dom";

const MobileLinks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const links = [
    { path: "/about", label: "About" },
    { path: "/scriptpak", label: "ScriptPak™" },
    { path: "/scriptweb", label: "ScriptWeb™" },
    { path: "/scriptinject", label: "ScriptInject™" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="mobile-links">
      {links.map((link) => (
        <button
          key={link.path}
          className={`link ${location.pathname === link.path ? "active" : ""}`}
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
  );
};

export default MobileLinks;

import React, { useState } from "react";
import "./../Assets/CSS/banner.css";
import bannerVideo from "./../Assets/video/1069431880.mp4";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const navigate = useNavigate()
  return (
    <section className="banner banner-margin-tp ">
      {/* Desktop/Tablet background video */}
      <video autoPlay muted loop playsInline className="video-bg desktop-only">
        <source src={bannerVideo} type="video/mp4" />
      </video>

      <div className="banner-content g-home-banner-margin">
        <h1>
          Built for the world of today, <br />
          Ready for the <span>opportunities of tomorrow.</span>
        </h1>
        <p>
          ScriptSite is a specialized pharmacy specifically designed for
          behavioral health, HIV/AIDS, long-term care and addiction care. Our
          mission is to help patients, prescribers, nurses, and case managers
          diagnose, treat, and recover better.
        </p>

        {/* On desktop → About button, on mobile → Watch Video button */}
        <div className="banner-buttons">
          <button className="btn about-btn" onClick={() => navigate("/about")}>About ScriptSite</button>

          <br />
          <button className="btn watch-btn mobile-only" onClick={handleOpen}>
            ▶ Watch Video
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <span className="close-btn" onClick={handleClose}>
              ✖
            </span>
            <video controls autoPlay>
              <source src={bannerVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

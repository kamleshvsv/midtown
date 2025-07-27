import React, { useState } from "react";
import "./../../Assets/CSS/scriptpak.css";
import bannerVideo from "./../../Assets/video/scriptPak.mp4";

export default function ScriptPakBanner() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <section className="scriptpak-banner scriptpak-banner-margin-tp ">
      {/* Desktop/Tablet background video */}
      <video autoPlay muted loop playsInline className="video-bg desktop-only">
        <source src={bannerVideo} type="video/mp4" />
      </video>

      <div className="scriptpak-banner-content">
        <h1>
          Prescriptions designed
          <br />
          with <span>you in mind.</span>
        </h1>
        <p>
          ScriptPak™ is designed to simplify the process of managing
          medications. ScriptPak™ is an innovative, 28-day multi-dose blister
          pack system that keeps all your medications organized.
        </p>

        {/* On desktop → About button, on mobile → Watch Video button */}
        <div className="scriptpak-banner-buttons">
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

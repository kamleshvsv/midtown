import React from "react";
import ScriptPakBanner from "./banner";
import pillImage from "./../../Assets/img/scriptpak/ScriptPak_IntroImage.webp";
import ScriptCarousel from "./scriptCarousel";
import ScriptBenefit from "./benefits";
import "./../../Assets/CSS/scriptpak.css"
import ScriptPakFeatures from "./Features";

export default function ScriptPak() {
  return (
    <>
    <title>ScriptPak™ | Midtown Pharmacy</title>
      <ScriptPakBanner />
      <section className="scriptpark-page">
        <div className="intro-section">
          <div className="container">
            <div className="left-part">
              <div className="intro-text">
                <h2>Simplify the process of managing medications.</h2>
                <p>
                  {" "}
                  Isn’t it time that pharmacy made it easier for you to manage
                  your medication? We improved every moment of taking your
                  medication, from our fully-customizable, compliance packaging
                  to our direct-to-door delivery. You no longer have to worry
                  about missing a dose, each pack is color-coded and perforated
                  to make sure you take what you need when you need it. Each
                  individual blister provides important information about the
                  medications contained, reducing the risk of error.
                </p>
              </div>
            </div>
            <img src={pillImage} alt="Medication" />
          </div>
        </div>
      </section>
      <ScriptCarousel />
      <ScriptBenefit />
      <ScriptPakFeatures />
    </>
  );
}

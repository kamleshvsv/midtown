import React from "react";
import MobileImage from "./../../Assets/img/about/scriptpak_AboutPg_Mobile.webp";
import laptopImage from "./../../Assets/img/scriptweb/ScriptWeb_Computer_Clipped.webp"
import ServicesCarousel from "../About/Carousel";
import ScriptWebBanner from "./ScriptWebBanner";
import ScriptWebBenefits from "./Benefits";
import "./../../Assets/CSS/scriptweb.css"
import ResourceSection from "./Resource";

export default function ScriptWebPage() {
  return (
    <>
      <title>ScriptWeb™ | Midtown RX</title>
      <ScriptWebBanner />
      <section className="scriptweb_text_block">
        <img
          src={laptopImage}
          className="attachment-full size-full"
          alt="ScriptWeb Computer"
          decoding="async"
          fetchPriority="high"
        />
        <div className="container">
          <div className="scriptweb-intro-section">
            <h2>
              We’re built for the world of today, and we’re ready for the
              opportunities of tomorrow.
            </h2>
            <p>
              ScriptWeb<sub>™</sub> utilizes advanced technology. Our web-based
              platform allows staff to access, search, print patient and
              medication information, and monitor prescription deliveries—
              efficiently.
            </p>
          </div>
        </div>
      </section>

<ScriptWebBenefits />
<ResourceSection />
    </>
  );
}

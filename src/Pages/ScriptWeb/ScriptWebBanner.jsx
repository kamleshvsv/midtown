import React from "react";
import "./../../Assets/CSS/scriptweb.css";
const ScriptWebBanner = () => {
  return (
    <>
      <section
        className="script-banner g-about-margin"
        role="banner"
        aria-label="About page banner with a natural background"
      >
        <div className="script-banner__content">
          <h1 className="script-banner__heading">
            Next-generation, <br />
            optimized,{" "}
            <span className="highlight-red">
              specialized <br />
              pharmacy care.
            </span>
          </h1>
          <p className="script-banner__subtext">
            ScriptWeb<sup>™</sup> is a HIPAA compliant, web-based software that
            allows prescribers, nurses and case managers to login and view a
            client's medication regimen, refill date and delivery or pick-up
            status—improving overall compliance and outcomes.
          </p>
        </div>
      </section>
    </>
  );
};

export default ScriptWebBanner;

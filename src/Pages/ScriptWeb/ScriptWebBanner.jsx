import React from 'react';
import BannerImage from "./../../Assets/img/scriptweb/scriptweb-banner.webp"
import "./../../Assets/CSS/scriptweb.css"
const ScriptWebBanner = () => {
  return (
    <>
      <style>
        {`
          .script-banner {
            position: relative;
            width: 100%;
            height: 82vh;
            background-image: url(${BannerImage});
            background-size: cover;
            background-position: bottom;
            display: flex;
            align-items: center;
            padding: 0 4rem;
            box-sizing: border-box;
          }

          /* Responsive */
          @media (max-width: 767px) {
            .script-banner {
              padding: 2rem;
              display: block;
               background: #dedfe2;  /* 👈 gray background */
              background-image: none !important; /* remove image */
              background-position: top center;
            }
          }
        `}
      </style>
      <section className="script-banner g-about-margin" role="banner" aria-label="About page banner with a natural background">
        <div className="script-banner__content">
            <h1 className="script-banner__heading">Next-generation, <br />
optimized, <span className="highlight-red">specialized <br />
pharmacy care.</span></h1>
          <p className="script-banner__subtext">
            ScriptWeb<sup>™</sup> is a HIPAA compliant, web-based software that allows prescribers, nurses and case managers to login and view a client's medication regimen, refill date and delivery or pick-up status—improving overall compliance and outcomes.
           </p>
        </div>
      </section>
    </>
  );
};

export default ScriptWebBanner;


import React from 'react';
import BannerImage from "./../../Assets/img/scriptinject/InjectHeroFinal-2.png"
import "./../../Assets/CSS/scriptinject.css"
const ScriptInjectBanner = () => {
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
              display: block;
               height: 60vh !important;
              background-position: top center;
              background-image: none !important;
        min-height: 450px ;
        background-color: #dedfe2 !important;
        padding: 2rem 1rem;
        text-align: center;
            }
          }
        `}
      </style>
      <section className="script-banner g-about-margin" role="banner" aria-label="About page banner with a natural background">
        <div className="script-banner__content">
          <h1 className="script-banner__heading">
            We put our patients first, with <span className="highlight-red">managed injections.</span> <br />
           </h1>
          <p className="script-banner__subtext">
            ScriptInject™ is a proprietary injection management solution that further increases compliance, reduces relapse, and ultimately improves treatment outcomes for clients experiencing conditions like schizophrenia.
           </p>
        </div>
      </section>
    </>
  );
};

export default ScriptInjectBanner;


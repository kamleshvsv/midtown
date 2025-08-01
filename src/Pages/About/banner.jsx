import React from 'react';
import "./../../Assets/CSS/about.css"
const AboutBanner = () => {
  return (
    <>
      <section className="about-banner g-about-margin" role="banner" aria-label="About page banner with a natural background">
        <div className="about-banner__content">
          <h1 className="about-banner__heading">
            Prescription care, built with <span className="highlight-red">patients,</span> <br />
            <span className="highlight-red">prescribers,</span><br />
            <span className="highlight-red">nurses and case managers in mind.</span>
          </h1>
          <p className="about-banner__subtext">
            Midtown has the personalized approach, platform and process to ensure the best possible treatment experience—period.
          </p>
        </div>
      </section>
      <div className="main-container g-text-center">
        <h2>Redefining the specialized pharmacy experience.</h2>
        <p>Medication management is not always easy. With our web-based software system, efficiently monitor medications and track delivery. And it doesn’t have to stop there! We further simplify the medication process with multi-dose prescription packaging that organizes medications to ensure a client never misses a dose.</p>
      </div>
    </>
  );
};

export default AboutBanner;


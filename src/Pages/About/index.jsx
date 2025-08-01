import React from "react";
import AboutBanner from "./banner";
import ServicesCarousel from "./Carousel";
import CheckIcon from "./../../Assets/img/about/CheckIcon.webp";
import bgImage from "./../../Assets/img/about/scriptpak_AboutPg.jpg"

import MobileImage from "./../../Assets/img/about/scriptpak_AboutPg_Mobile.webp"

export default function About() {
  return (
    <>
    <title>About | Midtown Pharmacy</title>
      <AboutBanner />
      <ServicesCarousel />
      {/* Benefit section */}
      <div className="benefit-main">
        <div className="container">
          <h2 className="text-center heading-margin">
            These are some of the benefits of working with Midtown:
          </h2>
          <div className="right_text">
            <div className="benefit-grid">
              <div className="benefit-item">
                <h5>Direct Communication</h5>
                <p>
                  Clear and concise communication between your clinic and an
                  assigned Midtown team member by phone and/or email.
                </p>
              </div>

              <div className="benefit-item">
                <h5>Delivery Management</h5>
                <p>
                  Free, on-time delivery is offered daily, accompanied with
                  delivery logs for inventory management.
                </p>
              </div>

              <div className="benefit-item">
                <h5>Prior Authorization Technology</h5>
                <p>
                  Our streamlined process utilizes our software platform to get
                  faster insurance approvals for hard-to-cover medications.
                </p>
              </div>

              <div className="benefit-item">
                <h5>Inventory & Refill Management</h5>
                <p>
                  Continuously monitoring client medications to ensure timely
                  deliveries and increase compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore section */}
      <section className="patients_sec">
      <div className="container">
        <div className="mobile-image">
          <img
            src={MobileImage}
            className="attachment-full size-full"
            alt=""
            decoding="async"
            fetchpriority="high"
            sizes="(max-width: 991px) 100vw, 991px"
          />{" "}
        </div>
        <div className="text_part">
          <h2>Taking your medications, shouldn’t be difficult.</h2>
          <h5>
            We provide you with the tools you need to manage your medications.{" "}
          </h5>
          <p>
            Our top priority is to make it easier for you to manage your health.
            ScriptPak<sub>™</sub> allows for a personalized approach to medicine
            in combination with our online patient database system, ScriptWeb
            <sub>™</sub>. Our system is organized with you in mind so there's no
            more guesswork, just simply better prescription management and care.{" "}
          </p>
          <div className="btns">
            <a href="/scriptpak" className="btn text-decoration-none">
              Explore ScriptPak<sub>™</sub>
            </a>
            <a href="/scriptweb" className="btn text-decoration-none">
              Explore ScriptWeb<sub>™</sub>
            </a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

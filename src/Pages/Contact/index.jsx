import React from "react";
import "./../../Assets/CSS/contact.css";
import ContactForm from "./ContactForm";
import mapLocation from "./../../Assets/img/map-location-icon.webp";

import map from "./../../Assets/img/map-1.png";

const ContactPage = () => {
  return (
    <>
      <title>Contact | Midtown RX</title>
      
    <section className="script-contact-page g-contact-pages">
      <div className="container">
        {/* Left Section */}
        <div className="left-section">
          <h2>Contact us</h2>
          <p>
            Tell us how we can be of service. <br />
            {/* To reach us directly, please call <br />
            <strong>
              <a href="tel:8553288734">(855) 328-8734</a>
            </strong>{" "}
            or email
            <strong>
              <br />
              <a href="mailto:hello@scriptsiterx.com">hello@scriptsiterx.com</a>
            </strong>
            . */}
          </p>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <a className="map-info" href="#">
            <img
              width="60"
              height="72"
              src={mapLocation}
              alt="map icon"
              className="onClick"
            />

            <div className="map-info-box">
              <span>Midtown</span>
              <p className="city">Alameda</p>
              <p className="address">
               2173 Harbor Bay Parkway<br />
              Alameda, CA 94502 
              </p>
              <p className="telno">
                <a href="tel:5108644199">(510) 864-4199</a>
                <br />

                <a href="mailto:hello@scriptsiterx.com">
                  hello@scriptsiterx.com
                </a>
              </p>
            </div>
          </a>

          <img className="map-image" src={map} alt="map" />
        </div>

      </div>

        {/* Mobile Address */}
        <div className="mobile-address">
          <h2>Location</h2>
          <h5>Alameda</h5>
          <p>
            2173 Harbor Bay Parkway <br />
            Alameda, CA 94502
          </p>
          <p className="telno">
            <a href="tel:5108644199">(510) 864-4199</a>
          <a href="mailto:hello@scriptsiterx.com">hello@scriptsiterx.com</a>
          </p>
        </div>
    </section>
    </>
  );
};

export default ContactPage;

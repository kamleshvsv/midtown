import React from "react";
import image from "./../Assets/img/features_icon/drugs.webp"
import image1 from "./../Assets/img/features_icon/browser-lineonly.webp"
import image2 from "./../Assets/img/features_icon/scriptinject.webp"
import doctorImage from "./../Assets/img/doctor.webp"; 
import pillImage from "./../Assets/img/redpillshome-2.png"; 
import doctorImageMobile from "./../Assets/img/mobile-doctor.webp"

import "./../Assets/CSS/feature.css"
import { useNavigate } from "react-router-dom";
const Features = () => {
  const navigate = useNavigate()
  const features = [
    {
      icon: image,
      title: "ScriptPak™",
      url:"scriptpak",
      description:
        "Simplify medication management, with the easy-to-use, 28-day multi-dose blister pack system—ScriptPak™.",
    },
    {
      icon: image1,
      title: "ScriptWeb™",
        url:"scriptpweb",
      description:
        "Manage, review and organize client medications easier with our online database system—ScriptWeb™.",
    },
    {
      icon: image2,
      title: "ScriptInject™",
        url:"scriptinject",
      description:
        "Changing the way you schedule and manage your antipsychotic injections—ScriptInject™.",
    },
  ];

  return (
    <>
    {/* //features */}
    <div className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className={`feature-card`}>
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <br />
            <span className="explore-link" onClick={() => navigate(`/${feature.url}`)}>
              Explore <span>›</span>
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Other Section */}
    <section className="scriptpak-section">
      <div className="scriptpak-container">
        <div className="scriptpak-image">
          <img src={pillImage} alt="ScriptPak Blister Pack" />
        </div>
        <div className="scriptpak-content">
          <h2>No more fussing around with inconvenient pill bottles.</h2>
          <h3>
            Meet ScriptPak™. Hand-delivered, organized blister packs, packaged
            exactly how you need it.
          </h3>
          <p>
            We understand the challenges of dealing with sickness, disease, and
            pain. Whether you're dealing with it personally, or helping a friend
            or family member—we get it. That's why we've made it our mission to
            do everything we can to make your experience as simple and enjoyable
            as humanly possible.
          </p>
          <button className="btn explore-btn" onClick={() => navigate("/scriptpak")}>Explore ScriptPak™</button>
        </div>
      </div>
    </section>

    {/* Services  */}
    <section className="scriptweb-section">
      <div className="scriptweb-container">
        <div className="scriptweb-content">
          <h2>
            We believe in putting patients,
            <br /> and their experiences—first.
          </h2>
          <h3>
            Providing the right tools to physicians, nurses & case managers,
            allowing them to provide the best care.
          </h3>
          <p>
            From a hand-delivered ScriptPak™, to the better care, technology,
            and patient services you've come to expect from us, there's no
            denying that our clients are our priority. With ScriptWeb™, we make
            it easy for you to search, review, and organize client medications.
            Welcome to a better platform.
          </p>
          <button className="btn about-btn" onClick={() => navigate("/scriptweb")}>Explore ScriptWeb™</button>
        </div>
        <div className="scriptweb-image">
  <picture>
    {/* Mobile image */}
    <source media="(max-width: 767px)" srcSet={doctorImageMobile} />
    {/* Default (desktop/tablet) */}
    <img src={doctorImage} alt="Doctor with Tablet" />
  </picture>
</div>

        {/* <div className="scriptweb-image">
          <img src={doctorImage} alt="Doctor with Tablet" />
        </div> */}
      </div>
    </section>
    </>
  );
};

export default Features;

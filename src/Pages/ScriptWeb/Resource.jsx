import React from "react";
import "./../../Assets/CSS/ResourceSection.css";

const ResourceSection = () => {
  return (
    <section className="resource-section">
      <div className="resource-container">
        <div className="resource-text">
          <h2>
            We believe in direct contact, <br />
            and full transparency.
          </h2>
          <p>
            When you’re working with patients, prescribers, nurses and case
            managers in the pharmacy world, everyone involved needs to know
            exactly what’s going on. Not only that, they need simple, dedicated,
            and direct access to the people, information, and services that help
            keep them alive and well.{" "}
            <strong>
              We’re who and what you need, when you need it—period.
            </strong>
          </p>
          <a href="/faq" className="explore-btn">
            Explore Resources
          </a>
        </div>
        <div className="resource-image"></div>
      </div>
    </section>
  );
};

export default ResourceSection;

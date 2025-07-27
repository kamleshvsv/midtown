import React from "react";
import ScriptPakBanner from "./banner";
import pillImage from "./../../Assets/img/scriptpak/ScriptPak_IntroImage.webp";
import ScriptCarousel from "./scriptCarousel";

export default function ScriptBenefit() {
  return (
    <div className="pk-benefit">
      <div className="pk-benefit-container">
        <div className="pk-benefit-heading">
          <h2>
            Seize the benefits of simplified medication management with
            ScriptPak<sub>™</sub>.
          </h2>
        </div>
        <div className="pk-benefit-grid">
            <div className="pk-benefit-left">
              <h4>Convenient Packaging</h4>
              <p>
                Your medication, including vitamins and OTCs, are all packaged
                together and sorted by day, time of day and dose. Talk about
                simplicity!
              </p>
            </div>

            <div className="pk-benefit-left">
              <h4>On-Time Delivery</h4>
              <p>
                Hand-delivered to your door. No lines. No waiting. Now that's
                service you can't beat.
              </p>
            </div>

            <div className="pk-benefit-left">
              <h4>Dedicated Team Members</h4>
              <p>
                If you ever have a question by phone and/or email, our team is
                ready and available to help. We're committed to fulfilling your
                prescriptions and your expectations.
              </p>
            </div>

            <div className="pk-benefit-left">
              <h4>Reduce Medication Errors</h4>
              <p>
                The perforated blister packs are color-coded to allow for
                specific intake times.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}

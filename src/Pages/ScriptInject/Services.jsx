import React from "react";

import images from "./../../Assets/img/scriptinject/ScriptInject_BottomSection_RED.jpg";
import mobileImage from "./../../Assets/img/scriptinject/ScriptInject_BottomSectionMobile-RED.jpg";
import ScriptInjectCarousel from "./ScriptInjectCarousel";
const ScriptInjectPage = () => {
  return (
    <section className="scriptinject-page">
      {/* Intro Section */}
      <div
        className="script-inect-intro-section"
        style={{
          backgroundImage: `url(${images})`,
        }}
      >
        <div className="container">
          <div className="scriptinject-mobile-image">
            <img
              width="1300"
              height="600"
              src={mobileImage}
              alt="ScriptInject Mobile"
            />
          </div>
          <div className="inject-left-part">
            <div className="intro-text">
              <h2>Gain access to a better you.</h2>
              <p>
                ScriptInject<sup>™</sup> improves adherence and quality of care
                by offering more convenient access to antipsychotic injections.
                With ScriptInject<sup>™</sup> we do the prep work for you. We
                optimize the pharmacy experience by eliminating the need to
                check for insurance coverage, monitoring appointment schedules
                and tracking administered injections whether in the pharmacy,
                home or clinic.
              </p>
            </div>
          </div>
        </div>

        <div className="mobile-container">
          <div className="scriptinject-mobile-text">
            <h2>Gain access to a better you.</h2>
            <p>
              ScriptInject<sup>™</sup> improves adherence and quality of care by
              offering more convenient access to antipsychotic injections. With
              ScriptInject<sup>™</sup> we do the prep work for you. We optimize
              the pharmacy experience by eliminating the need to check for
              insurance coverage, monitoring appointment schedules and tracking
              administered injections whether in the pharmacy, home or clinic.
            </p>
          </div>
        </div>
      </div>
      {/* /Intro Section */}

      <ScriptInjectCarousel />

      {/* Benefits Section */}
      <div className="scriptinject-benefits">
        <div className="text-center">
          <h2 style={{ textAlign: "center", color: "white" }}>
            Specialized injection management for you.
          </h2>
        </div>
        <div className="container">
          <div className="right-part">
            <div className="columns">
              <div className="item">
                <h4>
                  <span>1.</span>Quality Support
                </h4>
                <p>
                  We work with the client first-hand to get the injection
                  approved by the insurance.
                </p>
              </div>
              <div className="item">
                <h4>
                  <span>2.</span>Processed &amp; Ready
                </h4>
                <p>
                  We administer the injection in the pharmacy or home by our
                  licensed pharmacist or nurse, or we deliver the injection to
                  the clinic.
                </p>
              </div>
              <div className="item">
                <h4>
                  <span>3.</span>Scheduling
                </h4>
                <p>
                  We manage and monitor the client’s next injection date to
                  ensure compliance.
                </p>
              </div>
              <div className="item">
                <h4>
                  <span>4.</span>Continuum Of Care
                </h4>
                <p>
                  We monitor and manage the client’s injection lifecycle to
                  minimize any side effects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Benefits Section */}

      {/* Specialized Pharmacy Section */}
      <div className="specialized-pharmacy">
        <h2>
          ScriptInject<sup>™</sup> provides improved adherence and increased
          access and quality of care.
        </h2>
        <div className="container">
          <div className="old-pharmacy">
            <h4>The Old Pharmacy Method</h4>
            <ul>
              <li>
                <div className="scriptinject-benefit-item">
                  <h5>Direct Communication</h5>
                  <p>
                    Clear and concise communication between your clinic and an
                    assigned ScriptSite team member by phone and/or email.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item">
                  <h5>Relying On Your Schedule</h5>
                  <p>
                    You have to manage your own schedule, and make sure you put
                    reminders into your calendar to make it to the pharmacy. No
                    option for a nurse to come to your home.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item">
                  <h5>Non-Personalized Service</h5>
                  <p>
                    Your injections are not assigned to a specific pharmacist
                    and multiple team members may handle your injections.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item">
                  <h5>Lack of Communication</h5>
                  <p>
                    The nurses, case managers and prescribers do not have a
                    convenient way of tracking if a patient has received his or
                    her injection or not.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="optimize-pharmacy">
            <h4>Optimized Pharmacy with ScriptInject™</h4>
            <ul>
              <li>
                <div className="scriptinject-benefit-item-2">
                  <h5>Secure, Comfortable Environment</h5>
                  <p>
                    Our dedicated injection room makes sure you are assisted in
                    complete privacy.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item-2">
                  <h5>Work Around Your Schedule</h5>
                  <p>
                    Receive continuous reminders on your scheduled injection
                    date whether administered at the pharmacy or home. You need
                    flexibility - no problem.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item-2">
                  <h5>Dedicated Injection Team Member</h5>
                  <p>
                    Receive your injection by the same highly knowledgeable and
                    trained pharmacist or nurse every time.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item-2">
                  <h5>Organized Access to Injection Information</h5>
                  <p>
                    The nurses, case managers and prescribers can access
                    real-time patient injection dates and other medication
                    information efficiently with ScriptWeb<sup>™</sup>.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Specialized Pharmacy Section */}
    </section>
  );
};

export default ScriptInjectPage;

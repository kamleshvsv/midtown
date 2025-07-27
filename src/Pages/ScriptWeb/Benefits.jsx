import React from "react";

const ScriptWebBenefits = () => {
  return (
    <>
    <div className="scriptweb-benefits">
      <div className="text-center">
        <h2 style={{ textAlign: "center", color: "white",  }}>
          {" "}
          ScriptWeb<sub>™</sub> keeps the information you need organized,
          <br/> and
          easily accessible.
        </h2>
        <br />
      </div>
      <div className="container">
        <div className="right-part">
          <div className="columns">
            <div className="item">
              <h4>
                <span>1.</span>Paperless Process
              </h4>
              <p>Share data and manage your records more efficiently.</p>
            </div>
            <div className="item">
              <h4>
                <span>2.</span>Online Medication Management
              </h4>
              <p>
                Access, search, and print historical and current medication
                information.
              </p>
            </div>
            <div className="item">
              <h4>
                <span>3.</span>Delivery Confirmation
              </h4>
              <p>
                Review real-time status of medication deliveries and who signed
                for the deliveries.
              </p>
            </div>
            <div className="item">
              <h4>
                <span>4.</span>Refill Reminders
              </h4>
              <p>
                Alert staff when medications are eligible for refill before the
                medication runs out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      {/* Specialized Pharmacy Section */}
      <div className="specialized-pharmacy">
        <h2>A fundamentally new approach to specialized pharmacy.
        </h2>
        <div className="container">
          <div className="old-pharmacy">
            <h4>The Old Pharmacy Method</h4>
            <ul>
              <li>
                <div className="scriptinject-benefit-item">
                  <h5>Time Consuming</h5>
                  <p>Prescribers, nurses and case managers may waste a lot of precious time on the phone trying to figure out if the medication has been delivered and who signed for it.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item">
                  <h5>Manual Process</h5>
                  <p>You have to remember what current medications the client is taking, if any new medications have been added, or if any medications have been discontinued.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item">
                  <h5>Substandard Care</h5>
                  <p>Do you ever have questions for the pharmacy regarding a client's medication regimen that are not completely or accurately answered?
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="optimize-pharmacy">
            <h4>Optimized Pharmacy with ScriptWeb™</h4>
            <ul>
              <li>
                <div className="scriptinject-benefit-item-2">
                  <h5>Eliminate the Guesswork</h5>
                  <p>
                    You have direct, web-based access to medication regimen and delivery confirmation, so the client's profile are a click away.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item-2">
                  <h5>Organized Medication Management</h5>
                  <p>The client's medication history are available in his or her online medication profile and may be automatically renewed when he or she is getting low.
                  </p>
                </div>
              </li>
              <li>
                <div className="scriptinject-benefit-item-2">
                  <h5>Customizable Medication Reports</h5>
                  <p>Print out detailed refill, too soon to refill, no refill and filled medication reports organized by desired time range providing real-time data and analytics.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Specialized Pharmacy Section */}
      </>
  );
};

export default ScriptWebBenefits;

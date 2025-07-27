import React from "react";
import image from "./../Assets/img/newhomeimg.webp";
import { useNavigate } from "react-router-dom";

const ScriptInjectSection = () => {
  const navigate = useNavigate()
  return (
    <>
      <style>{`
        .script-inject-section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
          background-color: #f3f4f6; /* light grey bg */
          box-sizing: border-box;
          
          position: relative; /* For shadow effects */
        }
        .image-container {
          flex: 1 1 650px;
          max-width: 650px;
          min-width: 280px;
          display: flex;
          height :600px;
          justify-content: center;
          position: relative;
          background-image: url(${image});
          background-size: cover;
          background-position: right;
        }
        .image-container img {
          width: 100%;
          height: auto;
          border-radius: 1rem;
          box-shadow:
            10px 10px 15px rgba(0,0,0,0.1),
            4px 4px 8px rgba(0,0,0,0.05),
            inset -5px -2px 30px rgba(255 255 255 / 0.8);
          object-fit: cover;
          object-position: center left;
        }
        .content-container {
        
          flex: 1 1 500px;
          max-width: 550px;
          min-width: 280px;
          color: #4b5563; /* neutral color intended for text */
          z-index: 1; /* Ensure it's above the background */
        }
        .content-container h1 {
        letter-spacing:-0.025em;
          font-size: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: #5a5f6; /* Darker text for heading */
        }
        .content-container p {
          margin-bottom: 1rem;
          font-size: 18px;
          line-height: 1.5;
          color: #4b5563;
        }
          .content-container p.strong { font-size:20px; margin-bottom: 1.5rem; }
        .explore-button {
          background-color: #ef2f24; /* bright red */
          border: none;
          outline: none;
          cursor: pointer;
          color: #fff;
          font-size: 1rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          transition: background-color 0.3s ease;
          font-family: inherit;
        }
        .explore-button:hover,
        .explore-button:focus {
          background-color: #c8201b;
        }

        @media (max-width: 767px) {
        .image-container {
    height: auto; /* Let content define height */
    width: 100%;
    min-height: 250px; /* fallback so it doesn’t collapse */
    aspect-ratio: 16/9; /* keeps image proportionate */
    background-position: center center; /* show middle of image */
    background-size: cover;
    border-radius: 0.75rem;
  }
          .script-inject-section {
            flex-direction: column;
            padding: 2rem 1rem;
            background-image: none; /* No background for mobile */
          }
          .image-container,
          .content-container {
          text-align : center;
            max-width: 100%;
          }
          .content-container h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section
        className="script-inject-section"
        aria-label="Information about antipsychotic injections"
      >
        <div className="image-container">
          {/* <img
            src={image}
            alt="Doctor administering an antipsychotic injection to a female patient in a bright clinical setting"
            onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src="https://placehold.co/600x400?text=Image+Unavailable";}}
          /> */}
        </div>
        <div className="content-container">
          <h1>
            Getting your antipsychotic injection doesn&apos;t have to be a
            complicated process.
          </h1>
          <p className="strong">
            As a contracted pharmacy, ScriptInject™ offers scheduled, timely
            injections at the pharmacy or at the client's home for no additional
            cost.
          </p>
          <p>
            Whether trying to figure out if the injection will be covered by
            insurance, how the client will receive the injection, or if the
            client received his injection, we have your back.
          </p>
          <button
            className="explore-button"
            aria-label="Explore ScriptInject services"
            onClick={() => navigate("/scriptinject")}
          >
            Explore ScriptInject™
          </button>
        </div>
      </section>
    </>
  );
};

export default ScriptInjectSection;

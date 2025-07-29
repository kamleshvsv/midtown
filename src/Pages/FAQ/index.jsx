import React, { useState } from "react";
import "./../../Assets/CSS/faq.css";
import arrow from "./../../Assets/img/list-arrow.webp";
import activeArrow from "./../../Assets/img/active-arrow.webp";

const FAQPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeQuestion, setActiveQuestion] = useState(null); // track open question

  const faqData = {
    general: [
      {
        q: "I am a prescriber - how can I send in prescriptions to you?",
        a: 'We accept prescriptions by electronic Rx (in your SureScript system we are displayed as "Script Site Pharmacy"), fax or phone.',
      },
      {
        q: "How can I transfer my prescriptions to you?",
        a: "Very easy. We handle most of the work. We only need the names of your current medications and the name and contact information of the transferring pharmacy.",
      },
      {
        q: "Are delivery options available?",
        a: "Yes, we hand deliver throughout San Francisco Bay Area, and the delivery is free.",
      },
      {
        q: "How do I sign up for ScriptPak™ or ScriptWeb™ services?",
        a: "Please refer to our 'Contact' page to fill out some information. Alternatively, email us at hello@scriptsiterx.com or call us at (855) 328-8734 and our customer service representative will assist you.",
      },
      {
        q: "What if I want pill bottles?",
        a: "No problem. We offer pill bottles as well.",
      },
    ],
    scriptpak: [
      {
        q: "How many medications can be in my ScriptPak™?",
        a: "That depends on the medication and size of the medication, but generally, we can accommodate up to eighteen oral medications.",
      },
      {
        q: "How many doses are in a ScriptPak™",
        a: "Each individual blister pack has seven days supply and up to four doses. We typically dispense four blister packs that represent a 28-day supply.",
      },
      {
        q: "How many days are a typical multi-dose blister pack?",
        a: "It is twenty-eight days. However, we can customize it for your needs.",
      },
      {
        q: "How do you handle maintenance and PRN medications?",
        a: "Maintenance and PRN medications are separated. So, a PRN medication would be in its own blister pack. We can tailor this as needed (i.e., PRN in a pill bottle, etc.).",
      },
      {
        q: "Are there options for facilities?",
        a: "Yes! We work with several facilities and can tailor services to your need.",
      },
      {
        q: "How long does it take to receive my ScriptPak™?",
        a: "We can deliver as fast as less than 1 hour.",
      },
      {
        q: "What is the cost for ScriptPak™?",
        a: "There is no additional cost. You will only be responsible for any medication co-pays determined by your insurance.",
      },
    ],
    scriptweb: [
      {
        q: "How do I create an account?",
        a: "Please refer to our 'Contact' page to fill out some information. Alternatively, email us at hello@scriptsiterx.com or call us at (855) 328-8734 and our customer service representative will assist you.",
      },
      {
        q: "Who has access to my profile information?",
        a: "Please refer to our 'Contact' page to fill out some information. Alternatively, email us at hello@scriptsiterx.com or call us at (855) 328-8734 and our customer service representative will provide more details.",
      },
    ],
    scriptinject: [
      {
        q: "Do you have expertise in long-acting antipsychotic injections?",
        a: "Yes. We have received thorough support and education from the manufacturers, and Midtown was the first independent pharmacy in San Francisco contracted to provide injection management.",
      },
      {
        q: "Do you stock all antipsychotic injectables?",
        a: "Yes, we do. We have a full stock of Abilify Maintena, Aristada, Invega Sustenna, Invega Trinza, Zyprexa Relprevv, etc.",
      },
      {
        q: "Do you stock any other injectables?",
        a: "Yes, we do. For example, we can provide Vivitrol.",
      },
      {
        q: "Can a client get his/her injection at the pharmacy?",
        a: "Yes. We have contracts with manufacturers that allow a certified Midtown pharmacist to administer the injection at the pharmacy.",
      },
      {
        q: "Can a client get his/her injection at home?",
        a: "Yes. We can have a Midtown nurse administer the injection at the client’s home.",
      },
      {
        q: "If we have our own nurse to administer the injection, will you still dispense the injection?",
        a: "Yes. We will get insurance approval, process the injection and then have the injection hand-delivered to your clinic.",
      },
      {
        q: "What if the client’s insurance requires a PA or TAR?",
        a: "We have expertise in receiving insurance approval for the injection.",
      },
      {
        q: "What is the cost for ScriptInject™?",
        a: "There is no additional cost to have the injection administered at the pharmacy or home, or to have it delivered to the clinic.",
      },
    ],
  };

  // Filter ke hisaab se FAQ show karna
  const getFilteredFAQs = () => {
    if (activeFilter === "all") {
      return Object.entries(faqData);
    } else {
      return [[activeFilter, faqData[activeFilter]]];
    }
  };

  const toggleQuestion = (q) => {
    setActiveQuestion(activeQuestion === q ? null : q);
  };

  return (
    <>
    <title>FAQ | Midtown RX</title>
    
    <div className="faq-page g-other-pages">
      <div className="faq-main-heading">
        <h1 className="main-heading">Frequently Asked Questions</h1>
        <p className="heading-paragraph">
          It’s a pretty normal thing to have questions—especially when it comes
          to your health. This page is intended to create a valuable resource
          for our clients to quickly answer questions that we face almost every
          single day.
        </p>
      </div>
      <div className="container" style={{ display: "flex" }}>
        {/* Left Sidebar */}
        <div className="left-sidebar" style={{ width: "200px" }}>
          <h3>Filter Section</h3>
          <ul>
            <li onClick={() => setActiveFilter("all")}>
              <span
                className={`left-menu ${
                  activeFilter === "all" ? "filter-active" : ""
                }`}
              >
                Show All
              </span>
            </li>
            <li onClick={() => setActiveFilter("general")}>
              <span
                className={`left-menu ${
                  activeFilter === "general" ? "filter-active" : ""
                }`}
              >
                General
              </span>
            </li>
            <li onClick={() => setActiveFilter("scriptpak")}>
              <span
                className={`left-menu ${
                  activeFilter === "scriptpak" ? "filter-active" : ""
                }`}
              >
                ScriptPak<sub>™</sub>
              </span>
            </li>
            <li onClick={() => setActiveFilter("scriptweb")}>
              <span
                className={`left-menu ${
                  activeFilter === "scriptweb" ? "filter-active" : ""
                }`}
              >
                ScriptWeb<sub>™</sub>
              </span>
            </li>
            <li onClick={() => setActiveFilter("scriptinject")}>
              <span
                className={`left-menu ${
                  activeFilter === "scriptinject" ? "filter-active" : ""
                }`}
              >
                ScriptInject<sub>™</sub>
              </span>
            </li>
          </ul>
        </div>

        {/* Right Block */}
        <div className="right-block">
          {getFilteredFAQs().map(([category, faqs]) => (
            <div key={category} className="faq_part">
              <h3>
                {category === "general" && "General Questions"}
                {category === "scriptpak" && (
                  <>
                    ScriptPak<sub>™</sub> Questions
                  </>
                )}
                {category === "scriptweb" && (
                  <>
                    ScriptWeb<sub>™</sub> Questions
                  </>
                )}
                {category === "scriptinject" && (
                  <>
                    ScriptInject<sub>™</sub> Questions
                  </>
                )}
              </h3>
              <ul className="faq_list">
                {faqs.map((item, i) => (
                  <li
                    key={i}
                    className={`faq_item ${
                      activeQuestion === item.q ? "active" : ""
                    }`}
                  >
                    <h7 onClick={() => toggleQuestion(item.q)}>
                      <span
                        className={`faq_qes ${
                          activeQuestion === item.q ? "filter-active" : ""
                        }`}
                      >
                        {item.q}
                      </span>
                      <img
                        src={activeQuestion === item.q ? activeArrow : arrow}
                        className="g-active-arrow"
                      />
                    </h7>
                    {activeQuestion === item.q && (
                      <div className="faq_answer">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQPage;

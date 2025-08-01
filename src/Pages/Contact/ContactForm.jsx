import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    location: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // message text
  const [statusType, setStatusType] = useState(""); // success | error | info

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwbe8GpHA9ngG7cFyKoFfWic3yrKGB9xNrbiD6vohLyDSVQoM865gKp2kAmqCUXPZCpfA/exec";

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message || !formData.subject || !formData.location) {
      setStatus("⚠️ Please complete all required fields before submitting.");
      setStatusType("error");
      return;
    }

    setLoading(true);
    setStatus("⏳ Sending your message, please wait...");
    setStatusType("info");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        setStatus("✅ Thank you for contacting us! We’ve received your message and will get back to you within 24–48 hours.");
        setStatusType("success");
        setFormData({
          name: "",
          subject: "",
          location: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("❌ Something went wrong while submitting your form. Please try again in a few minutes.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Unable to connect to the server. Please check your internet connection and try again.");
      setStatusType("error");
    }

    setLoading(false);
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First and Last Name</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your full name here"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select message subject</option>
            <option value="ScriptPak™">ScriptPak™</option>
            <option value="ScriptInject™">ScriptInject™</option>
            <option value="ScriptWeb™">ScriptWeb™</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select Location</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Alameda">Alameda</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Type your email address here"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Type your phone number here"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {status && (
          <p
            style={{
              marginTop: "12px",
              fontWeight: "500",
              color:
                statusType === "success"
                  ? "green"
                  : statusType === "error"
                  ? "red"
                  : "#555",
            }}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

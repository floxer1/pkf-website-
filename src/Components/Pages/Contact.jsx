import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const [inquiry, setInquiry] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "General Inquiry",
    "Technical Support",
    "Billing and Payments",
    "Product Information",
    "Feedback",
    "Partnership Opportunities",
    "Career Opportunities",
    "Media Inquiries",
    "Report a Bug",
    "Other",
  ];

  const handleInquiryChange = (value) => {
    setInquiry(value);
    setShowSuggestions(false);
  };

  return (
    <div>
      <div className="contact-general">
        <h6>CONTACT US</h6>
        <div className="contacto">
          {" "}
          <p>
            <strong>Request Free</strong> Consultancy
          </p>
        </div>

        <div className="contact-sub">
          <div className="contact-info">
            <div className="contact-info1">
              {" "}
              <h6>Hotline 24/7</h6>
              <h4>(+23)5535 68 68</h4>
            </div>

            <p>
              <strong>Address:</strong> 58 Howard Street, San Francisco, CA 941
            </p>
            <p>
              <strong>Email:</strong> contact@iteck.co
            </p>
            <p>
              <strong>Fax:</strong> fax@iteck.co
            </p>
            <p>
              <strong>Work Hour:</strong> Mon-Sat: 9:00 - 18:00
            </p>
            <div className="contact-link">
              {" "}
              <a href="">GET DIRECTION</a>
            </div>
          </div>
          <div className="contact-area">
            <form action="">
              <div className="area1">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="inquiry-input">
                <div className="inquiry-wrapper">
                  <select
                    type="text"
                    name="inquiry"
                    placeholder="Your inquiry about?"
                    value={inquiry}
                    onChange={(e) => handleInquiryChange(e.target.value)}
                    onClick={() => setShowSuggestions(!showSuggestions)}
                  ></select>
                </div>

                {showSuggestions && (
                  <div className="suggestions">
                    <ul>
                      {suggestions.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => handleInquiryChange(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <textarea
                name="message"
                placeholder="Message"
                cols="70"
                rows="10"
              ></textarea>

              <label htmlFor="termsCheckbox">
                By submitting, I have agreed to the Terms & Conditions
              </label>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

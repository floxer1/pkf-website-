import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const inquiryParam = searchParams.get("inquiry");

    // Assuming you have a function to set the selected option in your form
    // Replace the following line with your logic to set the selected option
    if (inquiryParam) {
      const selectElement = form.current.elements.inquiry;
      selectElement.value = inquiryParam;
    }
  }, [location.search]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ib2h6a3",
        "template_apjp824",
        form.current,
        "_MBhlP84Kbbun9zI0"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetFormAndState = () => {
    form.current.reset();
    setIsEmailSent(false);
  };

  return (
    <div>
      <div className="contact-general">
        <h6>CONTACT US</h6>
        <div className="contacto">
          <p>
            <strong>Request Free</strong> Consultancy
          </p>
        </div>

        <div className="contact-sub">
          <div className="contact-info">
            <div className="contact-info1">
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
              <a href="">GET DIRECTION</a>
            </div>
          </div>
          <div className="contact-area">
            {isEmailSent && (
              <div className="popup">
                <p>Message sent</p>
                <span role="img" aria-label="check-mark">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <button onClick={resetFormAndState}>OK</button>
              </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="area1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact-name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact-email"
                />
              </div>
              <select
                name="inquiry"
                placeholder="Your inquiry about?"
                className="contact-inquiry"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Product Information">Product Information</option>
                <option value="Billing Inquiry">Billing Inquiry</option>
                <option value="Feedback and Suggestions">
                  Feedback and Suggestions
                </option>
                <option value="Partnership Opportunities">
                  Partnership Opportunities
                </option>
                <option value="Job Application">Job Application</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                cols="70"
                rows="10"
              ></textarea>
              <label>
                <input type="checkbox" className="check-boxes" />
                By submitting, I have agreed to the Terms & Conditions
              </label>
              <input
                type="submit"
                value="Send"
                className="send"
                onClick={resetFormAndState}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

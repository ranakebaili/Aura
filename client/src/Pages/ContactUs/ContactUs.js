import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-text">
        We'd love to hear from you! Feel free to reach out through any of the following channels:
      </p>
      <ul className="contact-list">
        <li className="contact-item">
          <a className="contact-link" href="mailto:rana.kebaili@gmail.com">Email</a>
        </li>
        <li className="contact-item">
          <a className="contact-link" href="https://www.facebook.com/rana.kebaili.5">Facebook</a>
        </li>
        <li className="contact-item">
          <a className="contact-link" href="tel:+216-99516420">Phone</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;

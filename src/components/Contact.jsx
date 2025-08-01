import React from "react";
import "./Contact.css";

function Contact({ darkMode }) {
  return (
    <section id="contact" className={darkMode ? "dark-contact" : ""}>
      <div className="contact-section">
        <h2 className="contact-heading">Reach Out</h2>
        <p className="contact-subtext">I'd love to hear from you!</p>

        <div className="contact-container">
          {/* Left: Form */}
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! I'll get back to you soon 😊");
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>

          {/* Right: Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span>📧</span>
              <p>pc5617918@gmail.com</p>
            </div>
            <div className="info-item">
              <span>📞</span>
              <p>+91 8394808254</p>
            </div>
            <div className="info-item">
              <span>📍</span>
              <p>Haridwar, Uttarakhand, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Palak Chauhan. All rights reserved.</p>
          <p>Made with 💙 using React</p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;

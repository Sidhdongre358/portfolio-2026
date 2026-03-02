import "./cssfiles/Contact.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let’s Connect</h2>
      <p className="contact-subtitle">
        Feel free to reach out through any of these platforms 🚀
      </p>

      <div className="contact-grid">
        <a
          href="https://github.com/Sidhdongre358"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon github" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sidarth-dongre-85a842193/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon linkedin" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/sid_arth358/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaInstagram className="contact-icon instagram" />
          <span>Instagram</span>
        </a>

        <a
          href="https://leetcode.com/u/SIDHDONGRE358/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <SiLeetcode className="contact-icon leetcode" />
          <span>LeetCode</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
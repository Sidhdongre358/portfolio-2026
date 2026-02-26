import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section id="contact">
      <h2>Connect With Me</h2>

      <div className="social-links">
        <a href="https://github.com/Sidhdongre358" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>

        <a href="https://www.linkedin.com/in/sidarth-dongre-85a842193/" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>

        <a href="https://www.instagram.com/sid_arth358/" target="_blank" rel="noreferrer">
          <FaInstagram /> Instagram
        </a>

        <a href="https://leetcode.com/u/SIDHDONGRE358/" target="_blank" rel="noreferrer">
          <SiLeetcode /> LeetCode
        </a>
      </div>
    </section>
  );
}

export default Contact;
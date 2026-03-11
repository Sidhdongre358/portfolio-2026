import "./cssfiles/Hero.css";
import { FaDownload, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">

        <h1>
          Hi, I’m <span>Sidarth Dongre</span>
        </h1>

        <h2>
          Java Backend Developer | PLM 3DEXPERIENCE | Microservices
        </h2>

        <p>
          I specialize in building <span>scalable, production-ready backend systems</span>
          using <span>Java, Spring Boot, and Microservices</span>.
          With strong expertise in <span>PLM 3DEXPERIENCE ENOVIA</span> and
          <span> Data Migration</span>, I help organizations optimize product lifecycle
          management and engineering data workflows.
        </p>

        <p>
          Passionate about <span>clean code</span>, <span>cloud-native architecture</span>,
          and <span>AI-assisted development</span>, I focus on delivering efficient,
          maintainable, and high-impact solutions.
        </p>

        <div className="hero-buttons">
          <a href="/Resume.pdf"  
            className="resume-btn">
            <FaDownload /> Download Resume
          </a>
          <a href="#contact" className="contact-btn">
            <FaEnvelope /> Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
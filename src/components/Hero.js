import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <h1>Sidarth Dongre</h1>
      <h2>Java Backend Developer</h2>

      <p>
        Building scalable microservices & enterprise backend systems using 
        Java, Spring Boot, and 3DEXPERIENCE ENOVIA.  
        AI-assisted developer focused on productivity and clean architecture.
      </p>

      <a href="/resume.pdf" download className="resume-btn">
        <FaDownload /> Download Resume
      </a>
    </section>
  );
}

export default Hero;


import { FaDownload } from "react-icons/fa";


function Hero() {
  return (
    <section
      className="hero"
      
    >
      <div className="hero-card">
        <h1>Hi, I’m Sidarth Dongre</h1>
        <h2>Java Developer | PLM 3D Experience</h2>
        <p>
          I'm specialize in building robust, production-ready backend systems with
          Spring Boot and Microservices. I have a strong background in PLM 3D Experience and Data migration, leveraging my expertise to optimize product lifecycle management processes. With a passion for
          clean code and scalable architecture, I deliver efficient solutions that drive
          business success.
        </p>

        <a href="/resume.pdf" className="resume-btn">
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
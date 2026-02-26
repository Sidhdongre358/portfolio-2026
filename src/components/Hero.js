// import { FaDownload } from "react-icons/fa";
import bg from "../assets/bg.png";

function Hero() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `
      
          url(${bg})
        `,
            }}
        >
            {/* <div className="hero-card">
        <h1>Sidarth Dongre</h1>
        <h2>Java Backend Developer</h2>

        <p>
          Building scalable enterprise backend systems using Java, Spring Boot,
          Microservices, and 3DEXPERIENCE ENOVIA.
        </p>

        <a href="/resume.pdf" download className="resume-btn">
          <FaDownload /> Download Resume
        </a>
      </div> */
            }
           


        </section>
    );
}

export default Hero;
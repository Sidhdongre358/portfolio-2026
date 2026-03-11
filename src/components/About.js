import "./cssfiles/About.css";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-card">


        <p>
          I am a <span>Java Backend Developer</span> with over <span>4+ years of experience</span> 
          building scalable and high-performance enterprise applications using 
          <span> Java, Spring Boot, Microservices</span>, and the 
          <span> 3DEXPERIENCE ENOVIA</span> platform.
        </p>

        <p>
          Currently, I work at <span>Tata Consultancy Services</span> on an automotive 
          Product Lifecycle Management (PLM) platform for a global client. My role focuses on 
          designing and developing backend services that manage complex engineering and 
          EBOM data while ensuring system reliability, performance, and long-term maintainability.
        </p>

        <p>
          I actively integrate <span>AI-powered tools</span> into my development workflow to 
          enhance productivity and code quality — from architecture design and code optimization 
          to debugging and rapid learning of new technologies.
        </p>

        <p>
          My long-term goal is to grow into a <span>Backend Architect</span> role and contribute to 
          large-scale distributed systems driven by <span>cloud computing, microservices</span>, 
          and <span>AI-assisted engineering</span>.
        </p>

      </div>
    </section>
  );
}

export default About;
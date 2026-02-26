function Projects() {
  return (
    <section id="projects">
      <h2>Key Projects</h2>

      <div className="project">
        <h3>Automotive PLM Backend Platform</h3>
        <p>
          Enterprise backend system for managing EBOM and automotive parts data 
          using Java, Spring Boot, Microservices, and 3DEXPERIENCE ENOVIA.
        </p>
        <p><b>Tech:</b> Java, Spring Boot, ENOVIA, MySQL, Docker, REST APIs</p>
      </div>

      <div className="project">
        <h3>Legacy Data Migration System</h3>
        <p>
          Built backend services to migrate data from legacy PLM systems to the 
          3DEXPERIENCE platform with validation and transformation logic.
        </p>
        <p><b>Tech:</b> Spring Boot, MongoDB, MySQL, REST APIs</p>
      </div>

      <div className="project">
        <h3>E-Commerce Microservices</h3>
        <p>
          Designed microservices for authentication, product catalog, cart, and order 
          management with JWT-based security.
        </p>
        <p><b>Tech:</b> Java, Spring Boot, MySQL, Docker</p>
      </div>

      <div className="project">
        <h3>WRIO Retailer App</h3>
        <p>
          Full stack retail management application using Spring Boot backend and React frontend.
        </p>
        <p><b>Tech:</b> Spring Boot, React, MongoDB</p>
      </div>
    </section>
  );
}

export default Projects;
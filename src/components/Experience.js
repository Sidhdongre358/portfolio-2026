import "./cssfiles/Experience.css";

function Experience() {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>

      <div className="experience-container">

        <div className="experience-card">
          <span className="experience-dot"></span>
          <h3>Senior Java Backend Developer</h3>
          <p className="company"><b>Tata Consultancy Services</b> | May 2024 – Present</p>
          <ul>
            <li>Design and develop scalable backend services using Java, Spring Boot, and Microservices.</li>
            <li>Work on automotive PLM systems with 3DEXPERIENCE ENOVIA and EBOM engineering data.</li>
            <li>Build secure REST APIs with validation and exception handling.</li>
            <li>Use AI tools to improve productivity and code quality.</li>
            <li>Support CI/CD pipelines and Docker deployments.</li>
            <li>Perform code reviews and resolve production issues.</li>
          </ul>
        </div>

        <div className="experience-card">
          <span className="experience-dot"></span>
          <h3>Associate System Engineer</h3>
          <p className="company"><b>Tata Consultancy Services</b> | June 2023 – April 2024</p>
          <ul>
            <li>Developed backend services using Spring Boot for data migration.</li>
            <li>Implemented RESTful APIs.</li>
            <li>Worked with MySQL and MongoDB.</li>
            <li>Participated in Agile ceremonies.</li>
            <li>Improved performance and fixed bugs.</li>
          </ul>
        </div>

        <div className="experience-card">
          <span className="experience-dot"></span>
          <h3>Associate System Engineer (Trainee)</h3>
          <p className="company"><b>Tata Consultancy Services</b> | May 2022 – May 2023</p>
          <ul>
            <li>Trained in Java, Spring Boot, and Microservices.</li>
            <li>Learned PLM concepts and ENOVIA basics.</li>
            <li>Assisted in backend development and testing.</li>
            <li>Supported senior developers.</li>
            <li>Handled documentation.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
import "./cssfiles/Courses.css";
import { FaJava, FaAws, FaRobot, FaTools, FaCloud } from "react-icons/fa";
import { SiSpringboot, SiDocker, SiGithub, SiOpenai } from "react-icons/si";

function Courses() {
  return (
    <section id="courses" className="courses-section">
      <h2 className="section-title">Courses & Certifications</h2>
      <p className="courses-subtitle">
        Continuous learning to stay ahead in Backend, Cloud, and AI technologies 🚀
      </p>

      <div className="courses-grid">

        {/* AI */}
        <div className="course-card highlight">
          <FaRobot className="course-icon ai" />
          <h3>AI Software Developer Program</h3>
          <p className="platform">Airtribe · 2025 – Present</p>
          <span className="tag">Generative AI • LLMs • Prompt Engineering</span>
        </div>

        <div className="course-card">
          <SiOpenai className="course-icon ai" />
          <h3>Generative AI for Developers</h3>
          <p className="platform">Coursera · 2025</p>
          <span className="tag">AI Apps • APIs • Automation</span>
        </div>

        {/* Backend */}
        <div className="course-card">
          <FaJava className="course-icon backend" />
          <h3>Java & Spring Boot Masterclass</h3>
          <p className="platform">Udemy · 2022</p>
          <span className="tag">Java • Spring Boot • REST APIs</span>
        </div>

        <div className="course-card">
          <SiSpringboot className="course-icon backend" />
          <h3>Microservices with Spring Cloud</h3>
          <p className="platform">Udemy · 2023</p>
          <span className="tag">Microservices • Config • Gateway</span>
        </div>

        {/* Cloud & DevOps */}
        <div className="course-card">
          <FaAws className="course-icon cloud" />
          <h3>AWS Fundamentals</h3>
          <p className="platform">AWS Skill Builder · 2024</p>
          <span className="tag">EC2 • S3 • IAM</span>
        </div>

        <div className="course-card">
          <SiDocker className="course-icon cloud" />
          <h3>Docker & CI/CD</h3>
          <p className="platform">Udemy · 2023</p>
          <span className="tag">Containers • GitHub Actions</span>
        </div>

        {/* Tools */}
        <div className="course-card">
          <SiGithub className="course-icon tools" />
          <h3>Git & GitHub for Developers</h3>
          <p className="platform">Udemy · 2022</p>
          <span className="tag">Version Control • Collaboration</span>
        </div>

        <div className="course-card">
          <FaTools className="course-icon tools" />
          <h3>Agile & Scrum Fundamentals</h3>
          <p className="platform">TCS Internal Training · 2023</p>
          <span className="tag">Scrum • SDLC • Teamwork</span>
        </div>

      </div>
    </section>
  );
}

export default Courses;
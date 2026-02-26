import { FaJava, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb, SiGooglecloud, SiReact } from "react-icons/si";

function Skills() {
  return (
    <section id="skills">
      <h2>Tech Stack</h2>

      <div className="skills-grid">
        <div><FaJava /> Java</div>
        <div><SiSpringboot /> Spring Boot</div>
        <div>Microservices</div>
        <div>REST APIs</div>
        <div><SiReact /> React</div>
        <div><SiMysql /> MySQL</div>
        <div><SiMongodb /> MongoDB</div>
        <div>ENOVIA (3DEXPERIENCE)</div>
        <div>Data Migration</div>
        <div><FaDocker /> Docker</div>
        <div><FaAws /> AWS</div>
        <div><SiGooglecloud /> GCP</div>
        <div><FaGitAlt /> Git</div>
        <div>CI/CD</div>
        <div>JUnit & Mockito</div>
        <div>Agile / Scrum</div>
        <div>AI Productivity Tools</div>
      </div>
    </section>
  );
}

export default Skills;
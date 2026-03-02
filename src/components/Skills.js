import "./cssfiles/Skills.css";

import { FaJava, FaDocker, FaAws, FaGitAlt, FaTools, FaDatabase, FaCloud } from "react-icons/fa";
import { 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiGooglecloud, 
  SiReact,
  SiIntellijidea,
  SiPostman,
  SiGithub,
  SiJira,
  SiSlack,
  SiOpenai,
  SiEclipseide
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { MdOutlineDeveloperMode, MdOutlinePsychology } from "react-icons/md";

function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">

        {/* Backend */}
        <div className="skills-category">
          <h3>Backend & Core</h3>
          <div className="skills-grid">
            <div><FaJava /> Java</div>
            <div><SiSpringboot /> Spring Boot</div>
            <div><MdOutlineDeveloperMode /> Microservices</div>
            <div><MdOutlineDeveloperMode /> REST APIs</div>
            <div><MdOutlineDeveloperMode /> JUnit & Mockito</div>
          </div>
        </div>

        {/* Frontend */}
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            <div><SiReact /> React</div>
            <div><MdOutlineDeveloperMode /> HTML</div>
            <div><MdOutlineDeveloperMode /> CSS</div>
            <div><MdOutlineDeveloperMode /> JavaScript</div>
          </div>
        </div>

        {/* Databases */}
        <div className="skills-category">
          <h3>Databases</h3>
          <div className="skills-grid">
            <div><SiMysql /> MySQL</div>
            <div><SiMongodb /> MongoDB</div>
            <div><FaDatabase /> Data Migration</div>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="skills-category">
          <h3>Cloud & DevOps</h3>
          <div className="skills-grid">
            <div><FaAws /> AWS</div>
            <div><SiGooglecloud /> GCP</div>
            <div><FaDocker /> Docker</div>
            <div><FaCloud /> CI/CD</div>
          </div>
        </div>

        {/* AI Tools */}
        <div className="skills-category ai-category">
          <h3>AI & Productivity</h3>
          <div className="skills-grid">
            <div><SiOpenai /> ChatGPT</div>
            <div><TbBrandGithubCopilot /> GitHub Copilot</div>
            <div><MdOutlinePsychology /> Windsurf AI</div>
            <div><MdOutlinePsychology /> Generative AI</div>
            <div><MdOutlinePsychology /> Prompt Engineering</div>
          </div>
        </div>

        {/* IDEs */}
        <div className="skills-category">
          <h3>IDEs & Developer Tools</h3>
          <div className="skills-grid">
            <div><SiIntellijidea /> IntelliJ IDEA</div>
            <div><VscCode /> VS Code</div>
            <div><SiEclipseide /> Eclipse IDE</div>
            <div><SiPostman /> Postman</div>
          </div>
        </div>

        {/* Enterprise Tools */}
        <div className="skills-category">
          <h3>Enterprise & PLM Tools</h3>
          <div className="skills-grid">
            <div><FaTools /> 3DEXPERIENCE ENOVIA</div>
            <div><FaTools /> Dassault Systems</div>
          </div>
        </div>

        {/* Code & Collaboration */}
        <div className="skills-category">
          <h3>Code & Collaboration</h3>
          <div className="skills-grid">
            <div><FaGitAlt /> Git</div>
            <div><SiGithub /> GitHub</div>
            <div><SiJira /> Jira</div>
            <div><SiSlack /> Slack</div>
            <div><MdOutlineDeveloperMode /> Agile / Scrum</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
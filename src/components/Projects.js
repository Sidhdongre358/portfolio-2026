import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "./cssfiles/Projects.css";

function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>
            <span className="view-more">Click to view details →</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
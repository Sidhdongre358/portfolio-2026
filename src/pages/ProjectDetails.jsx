import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "../components/cssfiles/ProjectDetails.css";


function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="project-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Projects
      </button>

      <h1>{project.title}</h1>
      <p className="full-desc">{project.description}</p>

      <h3>Tech Stack</h3>
      <div className="tech-list">
        {project.tech.map((t, index) => (
          <span key={index} className="tech-chip">{t}</span>
        ))}
      </div>

      <h3>Responsibilities</h3>
      <ul>
        {project.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.confidential ? (
          <span className="confidential-badge">🔒 Enterprise Confidential Project</span>
        ) : (
          <>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
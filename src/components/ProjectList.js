import React from "react";
import ProjectItem from "./ProjectItem";

// set the state

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}

      </div>
    </div>
  );
}

export default ProjectList;

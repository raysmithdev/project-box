import React from "react";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./ProjectList.css";
import ProjectContext from "../../Context/ProjectContext";

class ProjectList extends React.Component {
  static contextType = ProjectContext;
  render() {
    const greeting =
      this.context.currentUser !== "" ? (
        <h2>{this.context.currentUser}'s Dashboard</h2>
      ) : (
        <h2>Dashboard</h2>
      );
    return (
      <section className="project-list">
        <header className="list-header">
          {greeting}
        </header>
        <div className="list-projecttiles">
          {this.context.projects.map(project => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </section>
    );
  }
}

export default ProjectList;

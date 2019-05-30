import React from "react";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./ProjectList.css";
import ProjectContext from "../../Context/ProjectContext";
import ProjectsApiService from "../../services/project-api-service";

class ProjectList extends React.Component {
  static contextType = ProjectContext;

  componentDidMount() {
    this.context.clearError();
    ProjectsApiService.getProjects()
      .then(this.context.setProjectList)
      .catch(this.context.setError);
  }

  renderProjects() {
    const { projectList = [] } = this.context;
    console.log(projectList);
    return projectList.map(project => (
      <ProjectTile key={project.id} project={project} />
    ));
  }

  render() {
    const greeting =
      this.context.currentUser !== "" ? (
        <h2>{this.context.currentUser}'s Dashboard</h2>
      ) : (
        <h2>Dashboard</h2>
      );
    const { error } = this.context;
    return (
      <section className="project-list">
        <header className="list-header">{greeting}</header>
        <div className="list-projecttiles">
          {error ? (
            <p className="error">Sorry, there was an error</p>
          ) : (
            this.renderProjects()
          )}
        </div>
      </section>
    );
  }
}

export default ProjectList;

import React from "react";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./Dashboard.css";
import ProjectContext from "../../Context/ProjectContext";
import ProjectsApiService from "../../services/project-api-service";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  static contextType = ProjectContext;

  componentDidMount() {
    this.context.clearError();
    ProjectsApiService.getProjects()
      .then(this.context.setProjectList)
      .catch(this.context.setError);
  }

  handleSwitch = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  renderProjects() {
    const { projectList = [] } = this.context;
    if (this.state.isChecked) {
      return projectList
        .filter(project => project.user_id == this.context.currentUser)
        .map(project => <ProjectTile key={project.id} project={project} />);
    } else {
      return projectList.map(project => (
        <ProjectTile key={project.id} project={project} />
      ));
    }
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
        {this.context.currentUser !== "" ? (
          <label className="switch">
            <input
              className="switch-input"
              type="checkbox"
              onChange={this.handleSwitch}
            />
            <span className="switch-label" data-on="Mine" data-off="All" />
            <span className="switch-handle" />
          </label>
        ) : (
          <p>viewing all projects</p>
        )}

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

export default Dashboard;

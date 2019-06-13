import React, { Fragment } from "react";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./Dashboard.css";
import ProjectContext from "../../Context/ProjectContext";
import ProjectsApiService from "../../services/project-api-service";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      query: "",
      results: [],
    };
  }

  static contextType = ProjectContext;

  updateQueryValue(e) {
    this.setState({ results: [] });
    this.setState({ query: e.target.value });
    console.log(this.state.query);
  }

  componentDidMount() {
    this.context.clearError();
  }

  componentDidUpdate() {
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
        .filter(project => project.user_id === this.context.currentUserId)
        .map(project => <ProjectTile key={project.id} project={project} />);
    } else {
      return projectList.map(project => (
        <ProjectTile key={project.id} project={project} />
      ));
    }
  }

  // renderProjects() {
  //   const { projectList = [] } = this.context;
  //   if (this.state.isChecked && this.state.query !== "") {
  //     const query = this.state.query;
  //     const userResults = projectList.filter(
  //       project => project.user_id === this.context.currentUserId
  //     );
  //     const results = userResults.filter(function(p) {
  //       return p.title.includes(`${query}`);
  //     });
  //     return results.map(project => (
  //       <ProjectTile key={project.id} project={project} />
  //     ));
  //   } else if (this.state.isChecked) {
  //     return projectList
  //       .filter(project => project.user_id === this.context.currentUserId)
  //       .map(project => <ProjectTile key={project.id} project={project} />);
  //   } else if (this.state.query !== "") {
  //     const query = this.state.query;
  //     const results = projectList.filter(function(p) {
  //       return p.title.includes(`${query}`);
  //     });
  //     return results.map(project => (
  //       <ProjectTile key={project.id} project={project} />
  //     ));
  //   } else {
  //     return projectList.map(project => (
  //       <ProjectTile key={project.id} project={project} />
  //     ));
  //   }
  // }

  render() {
    const greeting =
      this.context.currentUser !== "" ? (
        <h2>{this.context.currentUser}'s Dashboard</h2>
      ) : (
        <h2>Dashboard</h2>
      );
    const { error } = this.context;
    console.log(this.state.query);

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
          <Fragment />
        )}

        {/* <div className="search-container">
          <input
            type="text"
            placeholder="search for..."
            value={this.state.query}
            onChange={e => this.updateQueryValue(e)}
          />
        </div> */}
        <div className="list-projecttiles" aria-live="polite">
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

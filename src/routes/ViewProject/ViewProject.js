import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../Context/ProjectContext";
import "./ViewProject.css";

class ViewProject extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = ProjectContext;

  render() {
    const project = this.context.projectList.find(
      project => project.id === Number(this.props.match.params.id)
    );
    return (
      <Fragment>
        <section className="project-container">
          <h2 className="project-header">{project.title}</h2>
          <p className="project-summary">Summary: </p>
          <p>{project.summary}</p>
          {project.materials[0] === "" ? (
            <Fragment />
          ) : (
            <Fragment>
              <p>Materials Needed:</p>{" "}
              <ul className="materials-list">
                {project.materials.map((material, index) => {
                  return <li key={index}>{material}</li>;
                })}
              </ul>
            </Fragment>
          )}
          {project.steps[0] === "" ? (
            <Fragment />
          ) : (
            <Fragment>
              <p>Steps:</p>
              <ol className="steps-list">
                {project.steps.map((step, index) => {
                  return <li key={index}>{step}</li>;
                })}
              </ol>
            </Fragment>
          )}
          <p>Project Created By: {project.username}</p>

          <div id="button-section">
            <button className="button" onClick={this.context.handleClickCancel}>
              Back
            </button>

            {this.context.currentUserId === project.user_id ? (
              <Fragment>
                <Link id="link" to={`/edit/${project.id}`}>
                  <button className="button">Edit Project</button>
                </Link>
                <button
                  className="button"
                  onClick={() => this.context.deleteProject(project.id)}
                >
                  Delete Project
                </button>
              </Fragment>
            ) : (
              <Fragment />
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ViewProject;

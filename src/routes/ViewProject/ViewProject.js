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
    console.log(project);
    return (
      <Fragment>
        <section className="project-container">
          <h2 className="project-header">{project.title}</h2>
          <p className="project-summary">Summary: </p>
          <p>{project.summary}</p>
          <p>Materials Needed:</p>
          <ul className="materials-list">
            {project.materials.map((material, index) => {
              return <li key={index}>{material.name}</li>;
            })}
          </ul>
          <p>Steps:</p>
          <ol className="steps-list">
            {project.steps.map((step, index) => {
              return <li key={index}>{step.name}</li>;
            })}
          </ol>
          <div id="button-section">
            <Link to={`/edit/${project.id}`}>
              <button className="button">Edit Project</button>
            </Link>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ViewProject;

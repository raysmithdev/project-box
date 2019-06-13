import React, { Component, Fragment } from "react";
import ProjectContext from "../../Context/ProjectContext";
import TokenService from "../../services/token-service";
import "./Form.css";

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: [""],
      steps: [""],
      title: "",
      summary: "",
      id: "",
    };
  }

  static contextType = ProjectContext;

  componentDidMount() {
    if (!TokenService.hasAuthToken()) {
      this.context.redirectToLogin();
    } else if (this.props.params.edit === "Y") {
      this.setState({
        title: this.props.params.project.title,
        summary: this.props.params.project.summary,
        id: this.props.params.project.id,
        materials: this.props.params.project.materials,
        steps: this.props.params.project.steps,
      });
    }
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSummaryChange = e => {
    this.setState({ summary: e.target.value });
  };

  handleMaterialNameChange = index => e => {
    const newMaterials = this.state.materials.map((material, mindex) => {
      if (index !== mindex) return material;
      return e.target.value;
    });
    this.setState({ materials: newMaterials });
  };

  handleStepNameChange = index => e => {
    const newSteps = this.state.steps.map((step, sindex) => {
      if (index !== sindex) return step;
      return e.target.value;
    });
    this.setState({ steps: newSteps });
  };

  handleAddMaterial = () => {
    this.setState({
      materials: this.state.materials.concat(""),
    });
  };

  handleAddStep = () => {
    this.setState({
      steps: this.state.steps.concat(""),
    });
  };

  handleRemoveMaterial = index => () => {
    this.setState({
      materials: this.state.materials.filter(
        (material, mindex) => index !== mindex
      ),
    });
  };

  handleRemoveStep = index => () => {
    this.setState({
      steps: this.state.steps.filter((step, sindex) => index !== sindex),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const project = {
      title: this.state.title,
      summary: this.state.summary,
      user_id: this.context.currentUserId,
      materials: this.state.materials,
      steps: this.state.steps,
      id: this.state.id,
    };
    if (this.props.params.edit === "Y") {
      this.context.editProject(project);
    } else {
      this.context.handleSubmitNewProject(project);
    }
  };
  render() {
    return (
      <section className="form-container">
        {this.context.currentUser === "" ? (
          <p className="error">Please Log In</p>
        ) : (
          <Fragment />
        )}
        <form className="create-project-form" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Project title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="knit sweater"
              value={this.state.title}
              onChange={this.handleTitleChange}
              aria-required="true"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="summary">Summary</label>
            <textarea
              name="summary"
              id="summary"
              rows="15"
              value={this.state.summary}
              onChange={this.handleSummaryChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="material">Materials</label>
            {this.state.materials.map((material, index) => (
              <div id="columns" key={index}>
                <input
                  type="text"
                  name="material"
                  aria-labelledby="material"
                  value={material}
                  onChange={this.handleMaterialNameChange(index)}
                />
                <button
                  type="button"
                  onClick={this.handleRemoveMaterial(index)}
                >
                  {" "}
                  -{" "}
                </button>
              </div>
            ))}
          </div>
          <div className="form-section button-section">
            <button type="button" onClick={this.handleAddMaterial}>
              + Material
            </button>
          </div>

          <div className="input-container">
            <label htmlFor="step">Steps</label>
            {this.state.steps.map((step, index) => (
              <div id="columns" key={index}>
                <input
                  type="text"
                  name="step"
                  aria-labelledby="step"
                  value={step}
                  onChange={this.handleStepNameChange(index)}
                />
                <button type="button" onClick={this.handleRemoveStep(index)}>
                  {" "}
                  -{" "}
                </button>
              </div>
            ))}
          </div>
          <div className="form-section button-section">
            <button type="button" onClick={this.handleAddStep}>
              + Step
            </button>
          </div>

          <div className="form-section" id="button-section">
            <button type="submit">Submit</button>
            <button type="button" onClick={this.context.handleClickCancel}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default ProjectForm;

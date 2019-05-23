import React, { Component } from "react";
import "./New.css";
import ProjectContext from "../../Context/ProjectContext";

class New extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      materials: [{ name: "" }],
      steps: [{ name: "" }],
      title: "",
      summary: "",
      id: '',
    };
  }
  
  static contextType = ProjectContext;

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSummaryChange = e => {
    this.setState({ summary: e.target.value });
  };

  handleMaterialNameChange = index => e => {
    const newMaterials = this.state.materials.map((material, mindex) => {
      if (index !== mindex) return material;
      return { ...material, name: e.target.value };
    });
    this.setState({ materials: newMaterials });
  };

  handleStepNameChange = index => e => {
    const newSteps = this.state.steps.map((step, sindex) => {
      if (index !== sindex) return step;
      return { ...step, name: e.target.value };
    });
    this.setState({ steps: newSteps });
  };

  handleAddMaterial = () => {
    this.setState({
      materials: this.state.materials.concat([{ name: "" }]),
    });
  };

  handleAddStep = () => {
    this.setState({
      steps: this.state.steps.concat([{ name: "" }]),
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
    const newProject = {
      id: Math.random()*1000,
      title: this.state.title,
      img: 'https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=amphibian-color-colour-70083.jpg&fm=jpg',
      summary: this.state.summary,
      materials: this.state.materials,
      steps: this.state.steps,
    };
    this.context.handleSubmitNewProject(newProject);
  };

  render() {
    return (
      <section className="form-container">
        <form className="create-project-form" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Project title</label>
            <input
              type="text"
              name="title"
              placeholder="knit sweater"
              value={this.state.title}
              onChange={this.handleTitleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="summary">Summary</label>
            <textarea
              name="summary"
              rows="15"
              value={this.state.summary}
              onChange={this.handleSummaryChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="material">Materials</label>
            {this.state.materials.map((material, index) => (
              <div id="columns">
                <input
                  type="text"
                  name="material"
                  value={material.name}
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
              <div id="columns">
                <input
                  type="text"
                  name="step"
                  value={step.name}
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
            <button type="reset">Reset</button>
          </div>
        </form>
      </section>
    );
  }
}
export default New;

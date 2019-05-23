import React, { Component } from "react";
import "./Create.css";

class Create extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="form-container">
        <header>
          <h1 className="large-text">New Project</h1>
        </header>
        <section className="form-container">
          //TODO: handleSubmitNewProject - decide whether to keep a state here
          and in app or to move input functions to app state...
          <form
            className="create-project-form"
            onSubmit={e => this.props.handleSubmitNewProject(e)}
          >
            <div className="form-section">
              <label htmlFor="title">Project title</label>
              <input
                type="text"
                name="title"
                placeholder="button-front shirt"
                required
              />
            </div>
            {/* <div class="form-section">
              <label for="project-image">Upload Image</label>
              <input type="file" name="project-image" />
              <button>Choose Another</button>
            </div> */}
            <div className="form-section">
              <label htmlFor="summary">Project summary</label>
              <textarea name="summary" rows="15" />
            </div>
            {/* <div className="form-section">
              <label htmlFor="materials">Materials Needed</label>
              {this.props.newProject.materialsInputs.map((input, index) => <input type="text" key={index} id={index} name="materials" />)}
              <button id="add-input-button" onClick={e => this.props.handleAddMaterialsClick(e)}>+ materials</button>
            </div>
            <div className="form-section">
              <label htmlFor="steps">Steps</label>
              {this.props.newProject.stepsInputs.map((input, index) => <input type="text" name="steps" key={index} id={index} />)}
              <button id="add-input-button" onClick={e => this.props.handleAddStepsClick(e)}>+ step</button>
            </div> */}

            <div className="form-section">
                {this.props.newProject.material.map((material, index) => (
                  <div>
                    <label htmlFor={material.name}>Materials Needed</label>
                    <input
                      type="text"
                      value={material.name}
                      key={index}
                      onChange={(e, index) =>
                        this.props.handleMaterialNameChange(e, index)
                        }
                      />

                  </div>
                ))}
              <button
                id="add-input-button"
                onClick={e => this.props.handleAddMaterialsClick(e)}
                >
                + materials
              </button>
            </div>

            <div className="form-section" id="button-section">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        </section>
      </section>
    );
  }
}

export default Create;

import React, { Component } from "react";
import "./LandingPage.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

class LandingPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    console.log('registrationsuccess', user)
    history.push("/login");
  };

  render() {
    return (
      <div className="landingpage-container">
        <section>
          <header className="large-text">
            <h3>A Place For Projects</h3>
          </header>
          <p className="img">[placeholder for visual element]</p>
          {/* <img src='https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?cs=srgb&dl=background-blank-craft-301703.jpg&fm=jpg' alt="craft tools on desk" className="img"/> */}
          <p className="text">
            Project Box helps you record how you made that thing! Like grandma's
            old recipe book, Project Box is a reliable reference that helps you
            remember the recipe for your project.
          </p>
        </section>
        <section>
          <header className="large-text">
            <h3>Record your projects</h3>
          </header>
          <p className="img">[placeholder for screenshot of project page]</p>
          <p className="text">
            Record your projects with ease, simply input your materials list,
            process pictures, steps, and any other notes relevant to your
            project
          </p>
        </section>
        <section>
          <header className="large-text">
            <h3>Discover new projects</h3>
          </header>
          <p className="img">
            [placeholder for screenshot of projects list page]
          </p>
          <p className="text">
            Browse project box and get started on your next craft
          </p>
        </section>
        <section>
          <header className="large-text">
            <h3>Join</h3>
          </header>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
      </div>
    );
  }
}
export default LandingPage;

import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingpage-container">
      <section>
        <header className="large-text">
          <h3>A Place For Projects</h3>
        </header>
        <p className="img">[placeholder for visual element]</p>
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
          process pictures, steps, and any other notes relevant to your project
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
        <form className="signup-form">
          <div>
            <label htmlFor="username">Username</label>
            <input
              placeholder="knitpearl77"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </section>
    </div>
  );
}
export default LandingPage;

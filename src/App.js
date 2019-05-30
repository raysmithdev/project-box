import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import NotFound from "./routes/NotFound/NotFound";
import LandingPage from "./routes/LandingPage/LandingPage";
import Login from "./routes/Login/Login";
import ProjectList from "./routes/ProjectList/ProjectList";
import Project from "./routes/Project/Project";
import New from "./routes/New/New";
import Edit from "./routes/Edit/Edit";
import "./App.css";
import ProjectContext from "./Context/ProjectContext";

class App extends Component {
  static defaultProps = {
    store: {
      projects: [],
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      loginUsername: "",
      projectList: [],
      error: null,
      project: "",
    };
  }

  handleLogin = e => {
    e.preventDefault();
    this.setState({ currentUser: this.state.loginUsername });
    this.props.history.push("/home");
  };

  handleUsernameChange = e => {
    this.setState({ loginUsername: e.target.value });
  };

  handleSubmitNewProject = newProject => {
    this.setState({ projects: this.state.projects.concat(newProject) });
    this.props.history.push("/home");
  };

  setCurrentUser = username => {
    console.log("f");
    this.setState({ currentUser: username });
  };

  setProject = project => {
    this.setState({ project });
  };

  clearProject = project => {
    this.setState({ project: "" });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setProjectList = projectList => {
    this.setState({ projectList });
  };
  render() {
    const contextValue = {
      currentUser: this.state.currentUser,
      loginUsername: this.state.loginUsername,
      projects: this.state.projects,
      handleLogin: this.handleLogin,
      handleUsernameChange: this.handleUsernameChange,
      handleSubmitNewProject: this.handleSubmitNewProject,
      setCurrentUser: this.setCurrentUser,
      setError: this.setError,
      clearError: this.clearError,
      setProject: this.setProject,
      clearProject: this.clearProject,
      setProjectList: this.setProjectList,
      projectList: this.state.projectList,
    };

    return (
      <div className="app">
        <header className="app-header">
          <Nav />
        </header>
        <main className="app-main">
          <ProjectContext.Provider value={contextValue}>
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route path={"/login"} component={Login} />
              <Route path={"/home"} component={ProjectList} />
              <Route path={"/new"} component={New} />
              <Route path={"/project/:id"} component={Project} />
              <Route path={"/edit/:id"} component={Edit} />
              <Route component={NotFound} />
            </Switch>
          </ProjectContext.Provider>
        </main>
      </div>
    );
  }
}

export default withRouter(App);

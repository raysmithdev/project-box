import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import NotFound from "./routes/NotFound/NotFound";
import LandingPage from "./routes/LandingPage/LandingPage";
import Login from "./routes/Login/Login";
import Dashboard from "./routes/Dashboard/Dashboard";
import ViewProject from "./routes/ViewProject/ViewProject";
import New from "./routes/New/New";
import Edit from "./routes/Edit/Edit";
import "./App.css";
import ProjectContext from "./Context/ProjectContext";
import ProjectsApiService from "./services/project-api-service";

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
      currentUserId: "",
      loginUsername: "",
      projectList: [],
      error: null,
      project: "",
    };
  }

  handleLogin = e => {
    e.preventDefault();
    this.setState({ currentUser: this.state.loginUsername });
    this.props.history.push("/dashboard");
  };

  handleUsernameChange = e => {
    this.setState({ loginUsername: e.target.value });
  };

  handleSubmitNewProject = project => {
    ProjectsApiService.postProject(project);
    this.props.history.push("/dashboard");
  };

  editProject = project => {
    this.props.history.push("/dashboard");
  };

  setCurrentUser = username => {
    this.setState({ currentUser: username });
  };

  setCurrentUserId = userId => {
    this.setState({ currentUserId: userId})
  }

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
      currentUserId: this.state.currentUserId,
      loginUsername: this.state.loginUsername,
      projects: this.state.projects,
      handleLogin: this.handleLogin,
      handleUsernameChange: this.handleUsernameChange,
      handleSubmitNewProject: this.handleSubmitNewProject,
      editProject: this.editProject,
      setCurrentUser: this.setCurrentUser,
      setCurrentUserId: this.setCurrentUserId,
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
              <Route path={"/dashboard"} component={Dashboard} />
              <Route path={"/new"} component={New} />
              <Route path={"/project/:id"} component={ViewProject} />
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

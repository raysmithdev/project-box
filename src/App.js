import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import NotFound from "./routes/NotFound/NotFound";
import LandingPage from "./routes/LandingPage/LandingPage";
import Login from "./routes/Login/Login";
import ProjectList from "./routes/ProjectList/ProjectList";
import Project from "./routes/Project/Project";
import New from "./routes/New/New";
import Edit from './routes/Edit/Edit'
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
      projects: [
        {
          id: 1,
          title: "Knit Sweater",
          img:
            "https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          materials: [
            { name: "1200 yards worsed weight yarn." },
            { name: "size 6 circular needles." },
            { name: "4 x size 6 double pointed needles." },
            { name: "stitch markers." },
            { name: "1 x yarn needle" },
          ],
          steps: [
            { name: "cast on" },
            { name: "knit bottom-up" },
            { name: "bind off" },
            { name: "wear" },
          ],
        },
        {
          id: 2,
          title: "bird box",
          img:
            "https://images.pexels.com/photos/5910/wood-bird-winter-grey.jpg?cs=srgb&dl=aviary-bird-house-birdhouse-5910.jpg&fm=jpg",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          materials: [
            { name: "1200 yards worsed weight yarn." },
            { name: "size 6 circular needles." },
            { name: "4 x size 6 double pointed needles." },
            { name: "stitch markers." },
            { name: "1 x yarn needle" },
          ],
          steps: [
            { name: "cast on" },
            { name: "knit bottom-up" },
            { name: "bind off" },
            { name: "wear" },
          ],
        },
        {
          id: 3,
          title: "tatting",
          img:
            "https://images.pexels.com/photos/159796/books-old-book-stack-vintage-159796.jpeg?cs=srgb&dl=antique-books-coffee-159796.jpg&fm=jpg",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          materials: [
            { name: "1200 yards worsed weight yarn." },
            { name: "size 6 circular needles." },
            { name: "4 x size 6 double pointed needles." },
            { name: "stitch markers." },
            { name: "1 x yarn needle" },
          ],
          steps: [
            { name: "cast on" },
            { name: "knit bottom-up" },
            { name: "bind off" },
            { name: "wear" },
          ],
        },
        {
          id: 4,
          title: "ring",
          img:
            "https://images.pexels.com/photos/17834/pexels-photo.jpg?cs=srgb&dl=black-and-white-close-up-engagement-17834.jpg&fm=jpg",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          materials: [
            { name: "1200 yards worsed weight yarn." },
            { name: "size 6 circular needles." },
            { name: "4 x size 6 double pointed needles." },
            { name: "stitch markers." },
            { name: "1 x yarn needle" },
          ],
          steps: [
            { name: "cast on" },
            { name: "knit bottom-up" },
            { name: "bind off" },
            { name: "wear" },
          ],
        },
      ],
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
    this.setState({ projects: this.state.projects.concat(newProject)})
    this.props.history.push('/home')
  }
  
  render() {
    const contextValue = {
      currentUser: this.state.currentUser,
      loginUsername: this.state.loginUsername,
      projects: this.state.projects,
      handleLogin: this.handleLogin,
      handleUsernameChange: this.handleUsernameChange,
      handleSubmitNewProject: this.handleSubmitNewProject,
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

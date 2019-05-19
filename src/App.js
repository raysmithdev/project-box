import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import NotFound from "./components/NotFound/NotFound";
import ProjectList from "./components/ProjectList/ProjectList";
import Login from "./components/Login/Login";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Nav />
        </header>
        <main className="app-main">
          <Switch>
            <Route exact path={"/"} component={ProjectList} />
            <Route path={"/login"} component={Login} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

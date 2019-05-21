import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import NotFound from "./routes/NotFound/NotFound";
import LandingPage from "./routes/LandingPage/LandingPage";
import Login from "./routes/Login/Login";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
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
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/login"} component={Login} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

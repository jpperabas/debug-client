import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Register from "./modules/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-container">
          <Route path={"/register"} component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;

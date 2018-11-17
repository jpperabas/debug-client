import React, { Component } from "react";
import PropTypes from "prop-types";

import { LoginForm } from "../modules/general";

class Login extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Login;

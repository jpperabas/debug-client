import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

import Register from './modules/Register'
import Login from './modules/Login'
import SetPassword from './modules/SetPassword'
import ForgotPassword from './modules/ForgotPassword'
import TextStyleSample from './modules/TextStyleSample'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-container">
          <Route path = {"/login"} component = {Login}/>
          <Route path = {"/register"} component = {Register}/>
          <Route path = {"/setPassword"} component = {SetPassword}/>
          <Route path = {"/forgotPassword"} component = {ForgotPassword}/>
          <Route path = {"/text-style-sample"} component = {TextStyleSample}/>
        </div>
      </Router>
    );
  };
};

export default App;
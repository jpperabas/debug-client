import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Register from './pages/Register'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-container">
          <Route path={'/register'} component={Register} />
          <Route path={'/login'} component={Login} />
        </div>
      </Router>
    )
  }
}

export default App

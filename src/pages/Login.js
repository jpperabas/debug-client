import React, { Component } from 'react'

import { LoginForm } from '../modules/General'
import { Container } from '../elements/Containers'

class Login extends Component {
  render() {
    return (
      <Container center>
        <LoginForm />
      </Container>
    )
  }
}

export default Login

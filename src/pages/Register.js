import React, { Component } from 'react'

import { RegisterForm } from '../modules/General'
import { Container } from '../elements/Containers'

class Register extends Component {
  render() {
    return (
      <Container center>
        <RegisterForm />
      </Container>
    )
  }
}

export default Register

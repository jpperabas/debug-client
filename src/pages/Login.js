import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { LoginForm } from '../modules/General'
import { Container } from '../elements/Containers'

class Login extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Container center>
        <LoginForm />
      </Container>
    )
  }
}

export default Login

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { RegisterForm } from '../modules/general'

class Register extends Component {
  static propTypes = {
    prop: PropTypes
  }
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    )
  }
}

export default Register

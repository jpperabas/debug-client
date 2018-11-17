import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Form from '../../components/Form/Form'
import { TextInput } from '../../elements/Inputs'
import Button from '../../elements/Button/Button'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'

import '../../styles/Fonts.css'
import './index.css'

class Login extends Component {
  onChange = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  login = () => {
    axios
      .post('http://localhost:3001/user/login', this.state)
      .then(res => {
        console.log(res.data.message)
        console.log(res.data.user)
        console.log(res.data.token)
        this.props.history.push('jaja')
      })
      .catch(res => {
        console.log(res.response.data.message)
      })
  }

  render() {
    return (
      <Form className="credentials-form">
        <h1 className="title1">Inicia sesión</h1>
        <TextInput
          className={'TextInput'}
          type={'text'}
          field={'email'}
          label={'Correo electrónico'}
          onChange={this.onChange}
        />
        <TextInput
          className={'TextInput'}
          type={'password'}
          field={'password'}
          label={'Contraseña'}
          onChange={this.onChange}
        />
        <ButtonGroup className="ButtonGroup">
          <Button
            className={'button text-button'}
            label="OLVIDÉ MI CONTRASEÑA"
            //onClick={}
          />
          <Button
            className={'button contained-button'}
            label="INICIAR SESIÓN"
            onClick={this.login}
          />
        </ButtonGroup>
      </Form>
    )
  }
}

export default withRouter(Login)

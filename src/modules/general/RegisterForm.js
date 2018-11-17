import React, { Component } from 'react'
import axios from 'axios'

import Form from '../../components/Form/Form'
import { TextInput } from '../../elements/Inputs'
import Button from '../../elements/Button/Button'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'

import '../../styles/Fonts.css'
import './index.css'

class Register extends Component {
  onChange = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  register = () => {
    axios
      .post('http://localhost:3001/user/register', this.state)
      .then(res => {
        console.log(res.data.message)
        console.log(res.data.stored_user)
      })
      .catch(res => {
        console.log(res.response.data.message)
      })
  }

  render() {
    return (
      <Form className="credentials-form">
        <h1 className="title1">Regístrate</h1>
        <TextInput
          className={'TextInput'}
          type={'text'}
          field={'name'}
          label={'Nombre'}
          onChange={this.onChange}
        />
        <TextInput
          className={'TextInput'}
          type={'text'}
          field={'surname'}
          label={'Apellido'}
          onChange={this.onChange}
        />
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
            label="ACCEDER"
            //onClick={}
          />
          <Button
            className={'button contained-button'}
            label="REGISTRARME"
            onClick={this.register}
          />
        </ButtonGroup>
      </Form>
    )
  }
}

export default Register

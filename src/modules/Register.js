import React, { Component } from "react";
import axios from "axios";

import Form from "../components/Form";
import TextInput from "../elements/TextInput/TextInput";
import Button from "../elements/Button";
import ButtonGroup from "../components/ButtonGroup";

import "../styles/Fonts.css";
import "../styles/Credentials.css";

class Register extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: ""
  };

  setName = value => {
    this.setState({
      name: value
    });
  };

  setSurname = value => {
    this.setState({
      surname: value
    });
  };

  setEmail = value => {
    this.setState({
      email: value
    });
  };

  setPassword = value => {
    this.setState({
      password: value
    });
  };

  register = () => {
    axios
      .post("http://localhost:3001/user/register", this.state)
      .then(res => {
        console.log(res.data.message);
        console.log(res.data.stored_user);
      })
      .catch(res => {
        console.log(res.response.data.message);
      });
  };

  render() {
    return (
      <div className="Login">
        <Form>
          <h1 className="title1">Regístrate</h1>
          <TextInput type={"text"} label={"Nombre"} getValue={this.setName} />
          <TextInput
            type={"text"}
            label={"Apellido"}
            getValue={this.setSurname}
          />
          <TextInput
            type={"text"}
            label={"Correo electrónico"}
            getValue={this.setEmail}
          />
          <TextInput
            type={"password"}
            label={"Contraseña"}
            getValue={this.setPassword}
          />
          <ButtonGroup className="ButtonGroup">
            <Button
              className={"button text-button"}
              label="ACCEDER"
              //onClick={}
            />
            <Button
              className={"button contained-button"}
              label="REGISTRARME"
              onClick={this.register}
            />
          </ButtonGroup>
        </Form>
      </div>
    );
  }
}

export default Register;

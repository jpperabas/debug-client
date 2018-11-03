import React, { Component } from 'react';

import logo from './logo.svg';

import Form from '../components/Form';
import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import LinkList from '../components/LinkList';
import Link from '../elements/Link';

import '../styles/Fonts.css';
import '../styles/Credentials.css';

class Register extends Component {
  render() {
    return (
        <div 
        className = "Login">
            <Form>
                <img
                src = {logo}
                alt = "logo"
                className = "Login-logo"/>
                <h1 className = "title">Regístrate</h1>
                <TextInput
                type = {"text"}
                label = {"Nombre"}/>
                <TextInput
                type = {"text"}
                label = {"Usuario"}/>
                <TextInput
                type = {"password"}
                label = {"Contraseña"}/>
                <Button
                className = {"contained-button"}
                label = {"Registrarse"}/>
                <LinkList
                className = {"hLinkList"}>
                    <Link
                    className = {"link xSmallText orangeText"}
                    label = {"Iniciar sesión"}
                    href = {"/login"}/>
                </LinkList>
            </Form>
        </div>
    );
  };
};

export default Register;
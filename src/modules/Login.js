import React, { Component } from 'react';

import logo from './logo.svg';

import Form from '../components/Form';
import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import LinkList from '../components/LinkList';
import Link from '../elements/Link';

import '../styles/Fonts.css';
import '../styles/Credentials.css';

class Login extends Component {
  render() {
    return (
        <div 
        className = "Login">
            <Form>
                <img
                src = {logo}
                alt = "logo"
                className = "Login-logo"/>
                <h1 className = "title">Inicia sesión</h1>
                <TextInput
                type = {"text"}
                label = {"Usuario"}/>
                <TextInput
                type = {"password"}
                label = {"Contraseña"}/>
                <Button
                className = {"contained-button"}
                label = {"Iniciar sesión"}/>
                <LinkList
                className = {"hLinkList"}>
                    <Link
                    className = {"link xSmallText orangeText"}
                    label = {"Registrarse"}
                    href = {"/register"}/>
                    <Link
                    className = {"link xSmallText orangeText"}
                    label = {"Olvidé mi contraseña"}
                    href = {"/forgotPassword"}/>
                </LinkList>
            </Form>
        </div>
    );
  };
};

export default Login;
import React, { Component } from 'react';

import logo from './logo.svg';

import Form from '../components/Form';
import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import LinkList from '../components/LinkList';
import Link from '../elements/Link';

import '../styles/Fonts.css';
import '../styles/Credentials.css';

class SetPassword extends Component {
  render() {
    return (
        <div 
        className = "Login">
            <Form>
                <img
                src = {logo}
                alt = "logo"
                className = "Login-logo"/>
                <h1 className = "title">Reestablece tu contraseña</h1>
                <TextInput
                type = {"password"}
                label = {"Nueva contraseña"}/>
                <TextInput
                type = {"password"}
                label = {"Confirmar contraseña"}/>
                <Button
                className = {"contained-button"}
                label = {"Reestablecer contraseña"}/>
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

export default SetPassword;
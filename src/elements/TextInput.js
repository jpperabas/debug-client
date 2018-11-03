import React from "react";

import '../styles/TextInput.css'

class TextInput extends React.Component {
    state = {
        text: ""
    };
    render() {
        return (
        <div className = "TextInput">
            <input type = {this.props.type} 
            required
            value = {this.state.text}
            onChange = {e => this.setState({text: e.target.value})}/>
            <span className = "highlight"></span>
            <span className = "bar"></span>
            <label>{this.props.label}</label>
        </div>
        );
    };
};

export default TextInput;
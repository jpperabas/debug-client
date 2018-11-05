import React from "react";

import "./TextInput.css";

class TextInput extends React.Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  handleChange = e => {
    this.props.getValue(e.target.value);
  };

  render() {
    const { type, label } = this.props;

    return (
      <div className="TextInput">
        <input
          type={type}
          required
          value={this.state.text}
          onChange={e => {
            this.onChange(e);
            this.handleChange(e);
          }}
        />
        <span className="highlight" />
        <span className="bar" />
        <label>{label}</label>
      </div>
    );
  }
}

export default TextInput;

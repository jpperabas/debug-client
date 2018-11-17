import React from "react";

import "./TextInput.css";

class TextInput extends React.Component {
  state = {
    text: ""
  };

  onChange = (field, e) => {
    this.setState({ text: e.target.value });
    this.props.onChange(field, e.target.value);
  };

  render() {
    const { className, type, field, label } = this.props;

    return (
      <div className={className}>
        <input
          type={type}
          required
          value={this.state.text}
          onChange={e => {
            this.onChange(field, e);
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

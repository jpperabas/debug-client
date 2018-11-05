import React from "react";

import "../../styles/Fonts.css";
import "./Button.css";

class Button extends React.Component {
  render() {
    const { className, onClick, label } = this.props;

    return (
      <button
        className={`${className} "smallText"`}
        type="button"
        onClick={onClick}
      >
        <span>{label}</span>
      </button>
    );
  }
}

export default Button;

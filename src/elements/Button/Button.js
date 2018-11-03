import React from "react";

import '../../styles/Fonts.css'
import './Button.css'

class Button extends React.Component {
    render() {
        return (
            <button 
            className = {[this.props.className, 'smallText'].join(' ')} 
            type = "button">
                <span>
                    {this.props.label}
                </span>
            </button>
        );
    };
};

export default Button;
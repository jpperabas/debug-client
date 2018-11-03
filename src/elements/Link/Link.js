import React from "react";

import '../../styles/Fonts.css'
import './Link.css'

class Link extends React.Component {
    render() {
        return (
            <li className = {this.props.className}>
                <a className = {this.props.className}
                href = {this.props.href}>
                    {this.props.label}
                </a>
            </li>
        );
    };
};

export default Link;
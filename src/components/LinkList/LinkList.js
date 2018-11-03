import React from "react";

import './LinkList.css'

class LinkList extends React.Component {
    render() {
        return (
            <ul
            className = {this.props.className}>
                {this.props.children}
            </ul>
        );
    };
};

export default LinkList;
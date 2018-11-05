import React from "react";

import "./ButtonGroup.css";

class LinkList extends React.Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}

export default LinkList;

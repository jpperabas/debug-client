import React from 'react'

import './index.css'

class Form extends React.Component {
  render() {
    const { className } = this.props
    return (
      <div className={`${className ? className + ' ' : ''}form`}>
        {this.props.children}
      </div>
    )
  }
}

export default Form

import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Container = ({ children = [], center = false }) => {
  return (
    <div className={`container ${center ? 'container--center' : ''}`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.array,
  center: PropTypes.bool
}

export default Container

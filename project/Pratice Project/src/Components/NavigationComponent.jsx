import React from 'react'
import { Link } from 'react-router-dom'

function NavigationComponent(props) {
    const {children,link} = props
  return (
    <div>
      <Link to={link}>{children}</Link>
    </div>
  )
}

export default NavigationComponent

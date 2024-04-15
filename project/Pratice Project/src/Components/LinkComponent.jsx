import React from 'react'
import { Link } from 'react-router-dom'

function LinkComponent(props) {
    const {link , children} = props;
  return (
    <div>
      <Link to={link}> {children}</Link>
    </div>
  )
}

export default LinkComponent

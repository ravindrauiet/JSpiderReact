import React from 'react'

function DivComponent(props) {
   const {children , className} = props;
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default DivComponent

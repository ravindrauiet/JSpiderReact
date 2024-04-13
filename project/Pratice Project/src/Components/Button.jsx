import React from 'react'

function Button(props) {
    const {children , style , className , onClick} = props;
  return (
    <>
      {/* <button style={style ? style: {background:'green', color:'white' , padding:'5px' , margin:'10px'}} onClick={onClick}>{children}</button> */}
      
      
      <button className={className } onClick={onClick}>{children}</button>
    </>
  )
}

export default Button

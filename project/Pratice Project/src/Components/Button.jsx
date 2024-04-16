import React from 'react'

function Button(props) {
    const {children , style , className , onClick} = props;
  return (
    <>
      {/* <button style={style ? style: {background:'green', color:'white' , padding:'5px' , margin:'10px'}} onClick={onClick}>{children}</button> */}
      
      
      <button className={className ? className: "bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button

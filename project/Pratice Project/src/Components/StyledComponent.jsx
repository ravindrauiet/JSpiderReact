import React from 'react'

function StyledComponent(props) {
    const {children , className} = props
  return (

    <div className={className ? className : "bg-blue-500 text-lg text-white m-2 p-2"}>
        {children}
    </div>

    // <div>
    //     font-size: ${(props) => props.fontSize || '16px'};
    //     color: ${(props) => props.color || '#333'};
    //     font-weight: ${(props) => props.fontWeight || 'normal'};
    //     text-align: ${(props) => props.textAlign || 'left'};
    //     margin: ${(props) => props.margin || '0'};
    //     padding: ${(props) => props.padding || '0'};
    // </div>
  )
}

export default StyledComponent

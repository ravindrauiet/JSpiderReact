import React from 'react'

function SpanComponent({children , className}) {
    return (
        <span className={className}>
          {children}
        </span>
      );
}

export default SpanComponent

import React from 'react'
import Morning from './Morning';
import Afternoon from './Afternoon';
import Evening from './Evening';
import Night from './Night';

const Task3Child = (props) => {
    
    let time = props.props;
    console.log(time);

    let renderPage ;

    switch (time) {
        case "morning" : renderPage = <Morning />; break;

        case "afternoon" : renderPage = <Afternoon /> ; break;
        
        case "evening" : renderPage = <Evening />; break;
        
        case "night" : renderPage = <Night /> ; break;
    }

  return (
    <div>
      {renderPage}
    </div>
  )
}

export default Task3Child

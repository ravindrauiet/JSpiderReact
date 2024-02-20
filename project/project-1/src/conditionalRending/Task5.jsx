import React, { Fragment } from 'react'

const Task5 = () => {
    let students = ["rohan" , "sohan"]
    // let students = []
  return (
    <div>
      {students.length >0 ? students.map((value,index) => {
        return (
            <Fragment key = {index}>
                <h1>Name is : {value}</h1>
            </Fragment>
        )
      }): "NO Student present"}
    </div>
  )
}

export default Task5

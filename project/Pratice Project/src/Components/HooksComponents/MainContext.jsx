import React,{createContext, useState} from 'react'
import ChildContect from './ChildContect';

export const colorMall = createContext();

function MainContext() {
    const [value,setValue] = useState("green");
    const [day ,setDay] = useState("Monday")
    const getDay = (item) =>{
        setDay(item);
    }
  return (
    <colorMall.Provider value={{mainColor:value , getDay:getDay}}>
        <h1>Parent Main Context Component</h1>
        <p>Today Day is {day}</p>

        <ChildContect />
    </colorMall.Provider>
  )
}

export default MainContext

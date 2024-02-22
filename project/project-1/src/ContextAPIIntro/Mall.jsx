import React, { createContext } from 'react'

export let mall = createContext();
const Mall = ({children}) => {
    let cloth = "t-shirt"
    let devices = "i-phone"
    let car = "supra"
  return (
    <div>
      <mall.Provider value={{cloth,devices,car}} > {children} </mall.Provider>
    </div>
  )
}

export default Mall

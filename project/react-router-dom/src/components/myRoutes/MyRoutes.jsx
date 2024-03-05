import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './../../App';
import Home from './../Home';
import About from './../About';
import Contact from './../Contact';
import Electronics from './../lestAside/Electronics';
import Grocery from './../lestAside/Grocery';
import Food from './../lestAside/Food';
import Clothing from './../lestAside/Clothing';
export let router = createBrowserRouter([{
  path: "/",
  element: <App></App>,
  children: [
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/electronics",
          element: <Electronics></Electronics>
        },
        {
          path: "/grocery",
          element: <Grocery></Grocery>
        },
        {
          path: "food",
          element: <Food></Food>
        },
        {
          path: "clothing",
          element: <Clothing></Clothing>
        },
      ]
    },
    {
      path: "/about",
      element: <About></About>
    },
    {
      path: "/contact",
      element: <Contact />
    }

  ]
}])
// const MyRoutes = () => {
//   return (
//     <div>MyRoutes</div>
//   )
// }

// export default MyRoutes
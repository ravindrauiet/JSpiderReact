import React from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div >

      <Navbar></Navbar>
      {/* <div className='w-[100%] h-[93vh] bg-slate-600'>welcome to the website</div> */}
      <div className='w-[100%] h-[93vh] bg-slate-500'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
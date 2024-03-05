import React from 'react'
import Logo from './Logo';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-around  bg-slate-300 h-[7vh] items-center' >
      <Logo></Logo>
      {/* <Home></Home>
      <About></About>
      <Contact></Contact> */}
      <Link to="/">home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
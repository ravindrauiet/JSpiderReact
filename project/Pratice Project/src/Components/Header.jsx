import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function Header() {
  return (
    <div className="m-0 p-0">
      <header className="bg-white ">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Router Coffee</span>
                <img className="h-4 w-auto" src={logo} alt="" />
                </a>
            </div>

            <ul className="flex justify-between items-center max-w-6xl mx-auto p-3 gap-8" >
                <Link to="./"><li>Home</li></Link>

                <Link to="./about"><li>About</li></Link>

                <Link to="./Contact"><li>Contact</li></Link>
            </ul>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>

        <h1 className="text-center text-sky-400 h-12"> Pratice Project</h1>
      </header>
    </div>
  )
}

export default Header


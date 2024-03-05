import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex'>
      <div className='w-[15%] h-[93vh] bg-slate-50'>
        <ol>
          <li>
            <Link to="/electronics">electronics</Link>
          </li>
          <li><Link to="/grocery">grocery</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/clothing">Clothing</Link></li>
        </ol>
      </div>
      <Outlet />
    </div>

  )
}

export default Home
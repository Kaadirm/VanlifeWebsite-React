import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


function HostLayout() {
  return (
    <div className="hostPage-container">
        <div className='hostPage-nav-div'>
          <nav className='hostPage-nav'>
            <NavLink className={({isActive}) => isActive ? "active-link" : "gray-link"}
            to="." end>Dashboard</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "gray-link"}
            to="income">Income</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "gray-link"}
            to="vans">Vans</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "gray-link"}
            to="reviews">Reviews</NavLink>
          </nav>
        </div>
        <Outlet />
    </div>
  )
}

export default HostLayout
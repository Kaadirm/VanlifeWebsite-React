import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="header">
            <NavLink className={({isActive}) => isActive ? "active-link" : ""}
            to="/">#VANLIFE</NavLink>
            <div className="link-div">
              <NavLink className={({isActive}) => isActive ? "active-link" : "gray-link"}
              to="host">Host</NavLink>
              <NavLink className={({isActive}) => isActive ? "active-link" : "gray-link"}
              to="about">About</NavLink>
              <NavLink className={({isActive}) => isActive ? "active-link" : "gray-link"}
              to="vans">Vans</NavLink>
            </div>
    </nav>
  )
}

export default Header
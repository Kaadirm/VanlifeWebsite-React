import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import avatarIcon from "../Assets/images/avatarIcon.png"

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
              <div>
                <Link to="login" className='avatar-link' ><img className="avatar-icon" src={avatarIcon} alt="avatar-icon" /></Link>
                <button style={{display: "none"}}>X</button>
              </div>
            </div>
    </nav>
  )
}

export default Header
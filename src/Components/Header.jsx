import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import avatarIcon from "../Assets/images/avatarIcon.png"

function Header() {
  const [userX, setUserX] = useState("userXHide")
  const handleClick = (e) => {
    if(localStorage.getItem("isLoggedIn")) {
      e.preventDefault()}
    if(userX === "userXHide"){
      setUserX("userXShow")
    }
    else{
      setUserX("userXHide")
    }
  }

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
              <div className='user-div' onClick={console.log("hello")}>
                <Link to="login" className='avatar-link'onClick={handleClick} ><img className="avatar-icon" src={avatarIcon} alt="avatar-icon" 
                /></Link> 
                <button className={userX} onClick={() => {localStorage.removeItem("isLoggedIn")}}>X</button>
              </div>
            </div>
            
    </nav>
  )
}

export default Header
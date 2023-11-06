import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Vans() {
  const [hostVans, setHostVans] = useState(null)

useEffect(() => {
  fetch("/api/host/vans")
  .then(response => response.json())
  .then(data => setHostVans(data.vans))
}, [])
console.count("hey")
  return (<>
  <div className='hostVans-container'>
    <h2 className='hostVans-header'>Your listed vans</h2>
    {!hostVans ? <h2>...loading</h2> : hostVans.map(item => 
      <div className='hostVans-van-block'>
        <NavLink to={`${item.id}`}
        className={({isActive}) => isActive ? "active-link" : ""}
        >
          <div>
            <img className='hostVans-img' src={item.imageUrl} alt='Van'/>
          </div>
        </NavLink>
        <div>
          <h3 className="hostVans-name">{item.name}</h3>
          <p className="hostVans-price">${item.price}/day</p>
        </div>
      </div>
      )} 
  </div>
    </>
  )
}

export default Vans
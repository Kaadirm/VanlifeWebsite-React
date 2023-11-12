import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import {requireAuth} from "../../utils"

export async function loader () {
  await requireAuth()
  return getHostVans()
}

function Vans() {
//const [hostVans, setHostVans] = useState(null)
  const hostVans = useLoaderData()
//useEffect(() => {
//   fetch("/api/host/vans")
//   .then(response => response.json())
//   .then(data => setHostVans(data.vans))
// }, [])

  return (<>
  <div className='hostVans-container'>
    <h2 className='hostVans-header'>Your listed vans</h2>
    {hostVans.map(item => 
      <div className='hostVans-van-block'>
        <NavLink to={item.id}
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
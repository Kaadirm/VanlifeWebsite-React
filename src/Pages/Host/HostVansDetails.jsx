import React from 'react'
import { NavLink, Link, useParams, useLoaderData } from 'react-router-dom'
// import { useState, useEffect } from 'react' Incase you want to use fetch and states
import { Outlet } from 'react-router-dom'
import { getHostVans } from "../../api"
import { requireAuth } from '../../utils'

export async function loader (param) {
  await requireAuth()
  return getHostVans(param.id)
}

function HostVansDetails() {
  // const param = useParams()
  // const [van, setVan] = useState(null)
  const [van, setVan] = useLoaderData()

  // useEffect(() => {
  //   fetch(`/api/host/vans/${param.id}`)
  //   .then(response => response.json())
  //   .then(data => setVan(data.vans))
  // }, [param.id])

  const btnBackgroundColor = {
    "simple": "#E17654",
    "rugged": "#115E59",
    "luxury": "#161616"
  }

return (
  <>
    <div className='hostVansDetail-container'>
      <Link to={"/host/vans"}
      relative='path'><h2>{"<--"} Back to all vans</h2></Link>
          <div className="hostVansDetail-frame">
            <div className="hostVansDetail-van-block">
              <div>
                <img className='hostVansDetail-img' src={van.imageUrl} alt='Van'/>
              </div>
              <div className='hostVansDetail-header'>
                <button className='hostVansDetail-btn'
                style={{backgroundColor: btnBackgroundColor[van.type]}}
                >{van.type}</button>
                <h3 className="hostVansDetail-name">{van.name}</h3>
                <p className="hostVansDetail-price"><span className='bold'>${van.price}</span>/day</p>
              </div>
            </div>
              <nav className='hostVansDetail-nav'>
                <NavLink to={"."}
                className={({isActive}) => isActive ? "active-link" : "gray-link"}
                end>Details</NavLink>
                <NavLink to={"pricing"}
                className={({isActive}) => isActive ? "active-link" : "gray-link"}
                >Pricing</NavLink>
                <NavLink to={"photos"}
                className={({isActive}) => isActive ? "active-link" : "gray-link"}>Photos</NavLink>
              </nav>
              <Outlet context={van} />
          </div>
    </div>
  </>  
  )
}

export default HostVansDetails
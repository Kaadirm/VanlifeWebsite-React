import React from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function HostVansDetails() {
  const param = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${param.id}`)
    .then(response => response.json())
    .then(data => setVan(data.vans))
  }, [param.id])

  const btnBackgroundColor = {
    "simple": "#E17654",
    "rugged": "#115E59",
    "luxury": "#161616"
  }

return (
  <>
    <div className='hostVansDetail-container'>
      <Link to={".."}
      relative='path'><h2>{"<--"} Back to all vans</h2></Link>
      {!van ? <h2>...Loading</h2> : van.map(item => {
        return (
          <div className="hostVansDetail-frame">
            <div className="hostVansDetail-van-block">
              <div>
                <img className='hostVansDetail-img' src={item.imageUrl} alt='Van'/>
              </div>
              <div className='hostVansDetail-header'>
                <button className='hostVansDetail-btn'
                style={{backgroundColor: btnBackgroundColor[item.type]}}
                >{item.type}</button>
                <h3 className="hostVansDetail-name">{item.name}</h3>
                <p className="hostVansDetail-price"><span className='bold'>${item.price}</span>/day</p>
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
              <Outlet context={[van, setVan]} />
          </div>)
        })}
    </div>
  </>  
  )
}

export default HostVansDetails
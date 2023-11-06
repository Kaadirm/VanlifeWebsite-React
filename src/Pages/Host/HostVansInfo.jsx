import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVansInfo() {
const [van, setVan] = useOutletContext()

  return (
    <>
      {van.map((item) => {
      return (
        <div className="hostVans-info">
          <div><span className="bold">Name:</span> {item.name}</div>
          <div><span className="bold">Category:</span> {item.type}</div>
          <div><span className="bold">Description:</span> {item.description}</div>
          <div><span className="bold">Visibility:</span> Public</div>
        </div>
      )})}
    </>
  )
}

export default HostVansInfo
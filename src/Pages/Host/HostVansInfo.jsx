import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVansInfo() {
const van = useOutletContext()

  console.log(van);
  return (
    <>
        <div className="hostVans-info">
          <div><span className="bold">Name:</span> {van.name}</div>
          <div><span className="bold">Category:</span> {van.type}</div>
          <div><span className="bold">Description:</span> {van.description}</div>
          <div><span className="bold">Visibility:</span> Public</div>
        </div>
    </>
  )
}

export default HostVansInfo
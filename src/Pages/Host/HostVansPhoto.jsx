import React from 'react'
import { useOutletContext } from 'react-router-dom';


function HostVansPhoto() {
  const van = useOutletContext()
  return (
    <div className='hostVansPhoto-div'><img className='hostVansPhoto-img' src={van.imageUrl} alt='van'></img></div>
  )
}

export default HostVansPhoto
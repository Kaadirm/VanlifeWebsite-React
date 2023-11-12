import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVansPricing() {
const van = useOutletContext()
  return (

    <div className='hostVansPricing'>${van.price}.00<span 
    style={{fontWeight: "normal", color: "gray"}}
    >/day</span></div>
  )
}

export default HostVansPricing
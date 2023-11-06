import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVansPricing() {
const [van, setVan] = useOutletContext()

console.log(van);
  return (

    <div className='hostVansPricing'>${van[0].price}.00<span 
    style={{fontWeight: "normal", color: "gray"}}
    >/day</span></div>
  )
}

export default HostVansPricing
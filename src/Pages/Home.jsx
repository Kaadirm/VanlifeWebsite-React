import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='homePage-container'>
      <h2 className='homePage-header'>You got the travel plans, we got the travel vans.</h2>
      <div>
        <p className='homePage-context'>Add adventure to your life by joining the #vanlife movement.</p>
        <p className='homePage-context'>Rent the perfect van to make your perfect road trip.</p>
      </div>
      <Link to="vans"><button className='homePage-btn'>Find your van</button></Link>
    </div>
    </>
  )
}

export default Home
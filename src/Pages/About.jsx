import React from 'react'
import van from '../Assets/images/van.jpg'

function About() {
  return (
    <>
    <div className='aboutPage-container'>
      <div className='aboutPage-img-div'>
          <img src={van} alt="Van" className='aboutPage-img' />
        </div>
      <div className="aboutPage-main">
        <h2 className='aboutPage-header'>Don't squeeze in a sedan 
          when you could relax in a van</h2>
        <div>
          <p className='aboutPage-context'>Our mission is to enliven your road trip 
            with the percet travel van rental.
            Our vans are recertified before each trip
            to ensure your travel plans can go off
            without a hitch.</p>
          <p className='aboutPage-context'>(Hitch costs extra &#128517;)</p>
          <p className='aboutPage-context'>Our team is full of vanlife enthusiast who know
          the firsthand the magic of touring the world on 4 wheels.
        </p>
        </div>
        

        <div className='aboutPage-btn-div'>
            <h4 className='aboutPage-btn-header'>Your destination is waiting.</h4>
            <h4 className='aboutPage-btn-header'>Your van is ready.</h4>
            <button className='aboutPage-btn'>Explore our vans</button>
        </div>
      </div>  
    </div>
    </>
  )
}

export default About
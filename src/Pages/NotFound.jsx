import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
    <div className="notFoundPage-container">
        <div className="notFoundPage-frame">
            <h1 className='notFoundPage-header'>Sorry, the page you were looking for was not found.</h1>
            <Link to={"/"}><button className='notFoundPage-btn bold'>Return to home</button></Link>
        </div>
    </div>
    </>
  )
}

export default NotFound
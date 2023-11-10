import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  console.log(error)
  return (
    <>
    <div className="errorPage-container">
        <div className="errorPage-frame">
            <h1 className='errorPage-header'>Sorry, {error.message ? error.message : "an error occured"}.</h1>
            {(error.status && error.statusText) && <pre className='errorPage-status'>{error.status} - {error.statusText}</pre>}
            <Link to={"/"}><button className='errorPage-btn bold'>Return to home</button></Link>
        </div>
    </div>
    </>
  )
}

export default Error
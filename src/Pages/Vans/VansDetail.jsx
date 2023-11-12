import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useLoaderData} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getVans } from '../../api';

export const loader = ({params}) => {
    return getVans(params.id)
}

function VansDetail() {
                //Variables

    //param variables for fetch  (Changed with params in loader)              
    // const params = useParams()
    
    //location info for the link to go back as you left
    const location = useLocation()
    const searchState = location.state.search
    //Data to go front part
    const van = useLoaderData()

    // Changed with useLoaderData hook
    //Fetching data from api according to item.id (comes from paramId)
    // useEffect(() => {
    //     fetch(`/api/vans/${param.id}`)
    //     .then(response => response.json())
    //     .then(data => setVan(data.vans) )
    // }, [param.id])



    //Background color for type buttons
    const btnBackgroundColor = {
        "simple": "#E17654",
        "rugged": "#115E59",
        "luxury": "#161616"
      }


    return (
    <>
    <div className='detailPage-container'>
        <div className='detailPage-van'>
            {/* Link goes to parent page considering parent page filtering */}
            <Link to={`/Vans?${searchState}`}>

                {/* conditional render considering parent page filtering  */}
                <h2 className='detailPage-header'>{"<--"} {searchState.split("&").length === 1 && searchState ? `Back to ${van.type} vans` : "Back to all vans"}</h2>
            </Link>
            <div className='detailPage-img-div'>
                <img className='detailPage-img' src={van.imageUrl} alt="van-detail" />
            </div>
            <div>
                <button 
                    className="detailPage-btn"
                    style={{backgroundColor: btnBackgroundColor[van.type]}}>
                    {van.type}
                </button>
            </div>
            <h2 className="detailPage-name" >{van.name}</h2>
            <p className="detailPage-price">${van.price}<span className="detailPage-day">/day</span></p>
            <p className="detailPage-description">{van.description}</p>
            <button className="detailPage-rent-btn" >Rent this van</button>
        </div>
    </div>
    </>
  )
}

export default VansDetail
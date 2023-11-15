import React, {useEffect, useState} from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'

export const loader = () => {
  return getVans()
}

function Vans() {
                //Variables
  //Base data
  //We get the data we need through useLoaderData hook
  const vans = useLoaderData()
  //Data for filtering
  const [filterVans, setFilterVans] = useState([])
  //SearchParam data for filtering and refreshing page
  const [searchParams, setSearchParams] = useSearchParams()
  //Filtering object to decide 
  const [filterCheckObj, setFilterCheckObj] = useState({})
  //Error state to manage errors
  // const [error, setError] = useState(null)

  const filterBtnColor = {
    "color1": "rgb(192, 193, 194)"
  }

  //Styling background for type-button below images
  const btnBackgroundColor = {
    "simple": "#E17654",
    "rugged": "#115E59",
    "luxury": "#161616"
  }
  // Data fetching from Mock API (Mirage JS)
  // Because of using useLoadData hook we don't need to useEffect when component onmount

  // useEffect(() => {
  //   const loadVans = async () => {
  //     setLoad(true)
  //     try{
  //       const data = await getVans()
  //       setVans(data)
  //     }catch (err) {
  //       setError(err)
  //     }finally{
  //       setLoad(false)
  //     }
      
  //   }
  //   loadVans()
            // I have replaced this with async function and call getVans from api.js file
                  // It is now much more cleaner
                  // fetch("/api/vans")
                  // .then(response => response.json())
                  // .then(json => setVans(json.vans))
  // },[])

  // Function for altering searchParameter values
  const handleSearchParams = (e) => {
    const {id} = e.target
    const searchText = searchParams.toString().split("&")
    if(searchText.includes(`type=${id}`)){
      const newUrl = searchText.filter(item => item !== `type=${id}`)
      setSearchParams(newUrl.join("&"))
    }
    else{
      searchText.push(`type=${id}`)
      setSearchParams(searchText.join("&"))
    }
              //First I used has/delete/append methods but they have some mobile incompatibility (key and value together not supported)
          // const {id} = e.target
          // if(searchParams.has("type", id)){
          //   searchParams.delete("type", id)
          //   setSearchParams(searchParams)
          // }
          // else{
          //   searchParams.append("type", id)
          //   setSearchParams(searchParams)
          // }        
  }
    
  //Connection between searchParam and FilterCheckObj by using useEffect
  useEffect(() => {
    setFilterCheckObj({
      "simple": searchParams.toString().split("&").includes("type=simple"),
      "luxury": searchParams.toString().split("&").includes("type=luxury"),
      "rugged": searchParams.toString().split("&").includes("type=rugged")
    });
  }, [searchParams])

  //            Clearing function to reset 
  const handleClear = () => {
    if(searchParams.size === 0) {
      return
    }
    setSearchParams({})
  }

  // setting filterVans for JSX part below

  useEffect(() => {
    setFilterVans(vans)
    if(Object.values(filterCheckObj).every(item => item === false)){
      setFilterVans(vans)
    }
    else{
      setFilterVans(vans.filter(item =>filterCheckObj[item.type] === true))
    }
  }, [vans, filterCheckObj])


  // throw new Error("this is a test error")

  return (
    <>
    <div className='vansPage-container'>
      {/* Header for explanation */}
      <div className='vansPage-header-div'>
        <h2 className='vansPage-header'>Explore our van options</h2>
      </div>

      {/* Filter buttons for making search easier */}

      <div className='vansPage-btn-div'>

        <button className='vansPage-btn' id='simple'
        style={filterCheckObj.simple ? {color: filterBtnColor.color1, 
        padding: "calc(0.25rem + 0.15vw) calc(0.75rem + 0.75vw)"} 
        : {color: "#4D4D4D"}}
        onClick={handleSearchParams}>Simple</button>

        <button className='vansPage-btn' id='luxury'
        style={filterCheckObj.luxury ? {color: filterBtnColor.color1,
        padding: "calc(0.25rem + 0.15vw) calc(0.75rem + 0.75vw)"} 
        : {color: "#4D4D4D"}}
        onClick={handleSearchParams}>Luxury</button>
        
        <button className='vansPage-btn' id='rugged'
        style={filterCheckObj.rugged ? {color: filterBtnColor.color1,
        padding: "calc(0.25rem + 0.15vw) calc(0.75rem + 0.75vw)"} 
        : {color: "#4D4D4D"}}
        onClick={handleSearchParams}>Rugged</button>
        
        <span className='vansPage-clear'
        onClick={handleClear}>Clear Filters</span>
      </div>
      
      
      {/* Vans part where data goes in grids */}
      <div className='vansPage-van-grids'>{filterVans.map(item => 
        <Link to={item.id} state={{search: `${searchParams.toString()}`}}>
          <div className='vansPage-van-grid'>
            <div><img className='vansPage-img' src={item.imageUrl} alt={item.name} /></div>
            <div className='vansPage-namePrice-div'>
              <div className='vansPage-item-name'>{item.name}</div>
              <div className='vansPage-item-price'>${item.price}</div>
            </div>
            <div className='vansPage-dayBtn-div'>
              {/* I put styling(backgroundColor) with an object according to item's type */}
              <button style={{backgroundColor: btnBackgroundColor[item.type]}} 
              className='vansPage-item-btn'>{item.type}</button>
              <div className='vansPage-item-day'>/day</div>
            </div>
          </div>
        </Link>)}
      </div>
    </div>
    </>
  )
}

export default Vans
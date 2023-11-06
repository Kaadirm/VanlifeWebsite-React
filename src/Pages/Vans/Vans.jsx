import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

function Vans() {
                //Variables
  //Base data
  const [vans, setVans] = useState([])
  //Data for filtering
  const [filterVans, setFilterVans] = useState([])
  //SearchParam data for filtering and refreshing page
  const [searchParams, setSearchParams] = useSearchParams()
  //Filtering object to decide 
  const [filterCheckObj, setFilterCheckObj] = useState({})

  const filterBtnColor = {
    "color1": "rgb(192, 193, 194)"
  }

  //Styling background for type-button below images
  const btnBackgroundColor = {
    "simple": "#E17654",
    "rugged": "#115E59",
    "luxury": "#161616"
  }

  //Function for altering searchParameter values
  const handleSearchParams = (e) => {
    const {id} = e.target
    if(searchParams.has("type", id)){
      searchParams.delete("type", id)
      setSearchParams(searchParams)
    }
    else{
      searchParams.append("type", id)
      setSearchParams(searchParams)
    }
  }
  
  //Connection between searchParam and FilterCheckObj by using useEffect
  useEffect(() => {
    setFilterCheckObj({
      "simple": searchParams.has("type", "simple"),
      "luxury": searchParams.has("type", "luxury"),
      "rugged": searchParams.has("type", "rugged")
    });
  }, [searchParams])


  //Data fetching from Mock API (Mirage JS)
  useEffect(() => {
    fetch("/api/vans")
    .then(response => response.json())
    .then(json => setVans(json.vans))
  },[])


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

  console.count("hel")

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
        <Link to={`${item.id}`}>
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
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function Vans() {

                //Variables
  //Base data
  const [vans, setVans] = useState([])
  //Data for filtering
  const [filterVans, setFilterVans] = useState([])


  const filterBtnColor = {
    "color1": "rgb(192, 193, 194)"
  }

  //Styling background for type-button below images
  const btnBackgroundColor = {
    "simple": "#E17654",
    "rugged": "#115E59",
    "luxury": "#161616"
  }

  //Filtering object to decide 
  const [filterCheckObj, setFilterCheckObj] = useState({
    "simple": false,
    "luxury": false,
    "rugged": false
  }) 

  //Data fetching from Mock API (Mirage JS)
  useEffect(() => {
    fetch("/api/vans")
    .then(response => response.json())
    .then(json => setVans(json.vans))
  },[])

  //Filter function to change object
  const handleFilter = (e) => {
    const {id} = e.target
    setFilterCheckObj(preVal => ({
      ...preVal,
      [id]: !preVal[id]
    })) 
  }

  //            Clearing function to reset 
  // I could use simply base object to clear, 
  // but if we want to add more filter we should do it by loop
  const handleClear = () => {
    // setFilterCheckObj(preVal => ({
    //   "simple": false,
    //   "luxury": false,
    //   "rugged": false
    // }))
    setFilterCheckObj(preVal => {
      const newFilterCheckObj = { ...preVal };
      for (const key in newFilterCheckObj) {
      newFilterCheckObj[key] = false;
      }
      return newFilterCheckObj;
      })
  }
  
  useEffect(() => {
    setFilterVans(vans)
    if(Object.values(filterCheckObj).every(item => item === false)){
      setFilterVans(vans)
    }
    else{
      setFilterVans(vans.filter(item =>filterCheckObj[item.type] === true))
    }
  }, [vans, filterCheckObj])


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
        onClick={handleFilter}>Simple</button>

        <button className='vansPage-btn' id='luxury'
        style={filterCheckObj.luxury ? {color: filterBtnColor.color1,
        padding: "calc(0.25rem + 0.15vw) calc(0.75rem + 0.75vw)"} 
        : {color: "#4D4D4D"}}
        onClick={handleFilter}>Luxury</button>
        
        <button className='vansPage-btn' id='rugged'
        style={filterCheckObj.rugged ? {color: filterBtnColor.color1,
        padding: "calc(0.25rem + 0.15vw) calc(0.75rem + 0.75vw)"} 
        : {color: "#4D4D4D"}}
        onClick={handleFilter}>Rugged</button>
        
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
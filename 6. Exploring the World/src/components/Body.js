import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useState, useEffect} from "react"

const Body = () => {
  // Local (inside the component) State variable - Super powerful variable
  const arr = useState(restaurantList)
  // const [listOfRestaurant ,setListOfRestaurant] = arr;

  const listOfRestaurant = arr[0];
  const setListOfRestaurant = arr[1]

  useEffect(()=>{
    console.log("use effect called!")
  }, [])

  const fetchData = async () => {
    console.log("hello")
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await response.json()
    console.log(data)
  };
  const data = fetchData()

  return(
      <div className="body">
        <div>
          <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurant.filter(
              (res) => (res.data.avgRating) > 4
            )
            setListOfRestaurant(filteredList)
          }}>Top Rated Restaurants</button>
        </div>
        {/* <div className="search">Search</div> */}
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} {...restaurant?.data} />
          })}
        </div>
      </div>
  )
}

export default Body;
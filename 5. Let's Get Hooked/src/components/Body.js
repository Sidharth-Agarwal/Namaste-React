import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useState} from "react"

const Body = () => {
  // Local (inside the component) State variable - Super powerful variable
  const arr = useState(restaurantList)
  // const [listOfRestaurant ,setListOfRestaurant] = arr;

  const listOfRestaurant = arr[0];
  const setListOfRestaurant = arr[1]

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
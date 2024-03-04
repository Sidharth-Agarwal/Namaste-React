import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    // Local State Variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    
    return (
        <div className="body">
            <div className="filter">
                <button onClick={() => {
                    // Filter logic here
                    // listOfRestaurants = listOfRestaurants.filter(
                    //     (res) => res.data.avgRating>4
                    // );
                    // console.log(resList1);
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                }} className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;
import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    // Local State Variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    // This can also by written in this way
    // const arr = useState(resList);
    // const [listOfRestaurants, setListOfRestaurant] = arr;
    // This is array de-strucuting which is done in react
    
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
                }} className="filter-btn">Top Rated Restaurants
                </button>
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
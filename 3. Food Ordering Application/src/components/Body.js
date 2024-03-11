import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State Variable
    // const [listOfRestaurants, setListOfRestaurant] = useState([resData]);
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // This can also by written in this way
    // const arr = useState(resList);
    // const [listOfRestaurants, setListOfRestaurant] = arr;
    // This is array de-strucuting which is done in react

    // This callback function is called as soon as the body component is rendered
    // If you have to do something after rendering the component - write it inside useEffect
    useEffect(()=>{
        // console.log("Use effect called");
        fetchData();
    }, []);

    // console.log("Body Called");
    // After the fetch call is successfully done the react will re-render the existing page with the new data
    // Conditional Rendering
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // This can be used while the data is being fetched from the API
    // But this is not the standard practice in the industry right now
    // if(listOfRestaurants.length === 0){
    //     return <h1>Loading...</h1>
    // }

    // Use Shimmer UI instead
    // This means load a fake page until the actual page is being loaded
    // Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return (<Shimmer/>)
    // }

    // Whatever the user type in the input box, we have to bind the value with a local state variable
    // Initially the input box would not work because the
    // "value" of the input box is tied to the searchText state variable and it is empty
    // To avoid this we have to add an onChange handler

    // console.log("Body Rendered");
    // Body will be re-rendered whenever there is any change in state variable
    // (Triggers a reconciliation cycle)
    const [searchText, setSearchText] = useState("");
    
    // Added ternary operator for the conditional rendering
    return filteredRestaurant.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        // Filter the restaurant card and update the UI
                        // Search text
                        // console.log(searchText)
                        const filteredRestaurants = listOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button onClick={() => {
                    // Filter logic here
                    // listOfRestaurants = listOfRestaurants.filter(
                    //     (res) => res.data.avgRating>4
                    // );
                    // console.log(resList1);
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                }} className="filter-btn">Top Rated Restaurants
                </button>
            </div>
            {/* <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div> */}
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;
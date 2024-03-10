import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props

    // const {
    //     cloudinaryImageId,
    //     name,
    //     avgRating,
    //     cuisines,
    //     costForTwo,
    //     deliveryTime
    // } = resData?.data;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = resData?.info;

    const {
        deliveryTime
    } = resData?.info?.sla;

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            {/* <img className="res-logo" src={CDN_URL + resData.data.cloudinaryImageId}/> */}
            <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;
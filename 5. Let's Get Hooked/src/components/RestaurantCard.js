import { IMG_CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor:"#f0f0f0"
}

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    avgRating,
    }) => {
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3> {name} </h3>
            <h4> {cuisines.join(', ')} </h4>
            <h4> {avgRating + " stars"} </h4>
            <h4> {"Rs. " + costForTwo / 100} </h4>
            <h4> {deliveryTime + " minutes"} </h4>
        </div>
    )
}

export default RestaurantCard;
import React from "react";
import ReactDOM from "react-dom/client";

/*
High Level Layout -:

-> Header
1. Logo
2. Nav Items

-> Body
1. Search
2. Restaurant Container
    a. Restaurant Card
        i. Image
        ii. Name of the restaurant
        iii. Star Rating
        iv. cuisines
        v. delivery time
-> Footer
1. Copyright
2. Links
3. Address
4. Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// In a JSX file, inline css is using JavaScript objects
const styleCard = {
    backgroundColor:"#f0f0f0"
}

// This is the way of making a static component
// const RestaurantCard = () => {
//     return (
//         <div className="res-card" style={styleCard}>
//             <img className="res-logo" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"/>
//             <h3>Meghana Foods</h3>
//             <h4>Biryani, North Indian, Asian</h4>
//             <h4>4.3 Stars</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// Creating dynamic cards using props
// Here was are passing props into a react component
// These props act an object in the component

// This is called de-structing on the fly
// This method can also be used while using props
// const RestaurantCard = ({resName, cuisine, rating, delivery}) => {
//     return (
//         <div className="res-card" style={styleCard}>
//             <img className="res-logo" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"/>
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>{rating}</h4>
//             <h4>{delivery}</h4>
//         </div>
//     )
// }

// Another method
const RestaurantCard = (props) => {
    console.log(props)
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.delivery}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    resName="Meghana Food" 
                    cuisine="Biryani, North Indian, Asian" 
                    rating="4.3" 
                    delivery="38 minutes"
                />
                <RestaurantCard 
                    resName="KFC" 
                    cuisine="Burger, Fast Food" 
                    rating="4.1" 
                    delivery="21 minutes"
                />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
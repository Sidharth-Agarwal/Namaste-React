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

const styleCard = {
    backgroundColor:"grey"
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
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
import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

// Never create state variable outside the component
// const [btnNameReact, setBtnNameReact] = useState("Login")
// This will throw an error

const Header = () => {
    // const btnName = "Login";
    // This is the reason why local state variables are used to update data dynamically
    const [btnNameReact, setBtnNameReact] = useState("Login")
    // When the button is click the whole header component is rendered
    // But since the only the login button is updated only that value will be affects

    // Always keep the state variables on the top of the component
    // Don't create state variable in conditionals or loops - This create inconsistencies
    
    // Important stuff about useEffect -:
    // If no dependency array is given
    // Evertime the header component is rendered - useEffect will be called
    // If dependency array is given
    // useEffect is only called on the initial render - Just Once
    // If dependency array is [btnNameReact]
    // useEffect will be called everytime btnNameReact will be updated
    useEffect(() => {
        console.log("useEffect Called!")
    }, []);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* We can update/re-render the page using JavaScript variables
                    <button className="login-btn" onClick={() => {btnName="Logout"}}>
                        {btnName}
                    </button> */}
                    <button className="login-btn" onClick={() => {btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
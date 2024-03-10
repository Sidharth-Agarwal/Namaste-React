import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    // const btnName = "Login";
    // This is the reason why local state variables are used to update data dynamically
    const [btnNameReact, setBtnNameReact] = useState("Login")
    // When the button is click the whole header component is rendered
    // But since the only the login button is updated only that value will be affects

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
                    <button className="login-btn" onClick={() => {setBtnNameReact("Logout")}}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
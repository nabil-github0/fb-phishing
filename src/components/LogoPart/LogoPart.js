import React from "react";
import Logo from "./logo.png"
import "./LogoPart.css"

const LogoPart = () => {
    return (
        <div className="container">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <h1>
        Facebook helps you connect and share with the people in your life.
        </h1>
        </div>
    )
}

export default LogoPart;
import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Campgrounds from "./campgrounds";
import Nav from "../nav"


function Home() {
    return (
        <div>
            <Nav />
            <div className="container">
            <h1>Welcome to the yelp camp home page</h1>
            </div>
        </div>
    );

}

export default Home;
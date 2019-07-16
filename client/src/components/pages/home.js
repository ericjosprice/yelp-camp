import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Campgrounds from "./campgrounds";
import Nav from "../nav";
import "./home.css";


function Home() {


    return (
        <div>
            <div className="container" id="landingHeader">
            <h1>Welcome to yelp camp</h1>
            <a href="/campgrounds">
            <button className=" btn btn-info">View all Campgrounds</button>
            </a>
            </div>
            <ul class="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );

}

export default Home;
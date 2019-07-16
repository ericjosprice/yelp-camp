import React from "react";
import "./style.css";

function Nav(){
    return(
        <div className="container">
            <nav className="navbar navbarDefault">
                <div className="navbarHeader">
                    <a className="navbarBrand" href="/">Yelpcamp</a>
                </div>

                <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/campgrounds">Campgrounds</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/campgrounds/new"> + Add New </a>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
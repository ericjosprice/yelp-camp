import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import "./index.css"

function CampgroundCard(props) {
    return(
    <div className="col-md-3 col-sm-6" id={props.id}>
        <figure className="figure">
            <figcaption className="figure-caption ">{props.name}</figcaption>
            <img  className="figure-img img-thumbnail rounded" alt={props.name} src={props.image} />
            <Link to={"/campgrounds/" + props.id}>
            <button className="btn btn-info btn-sm">More info</button>
            </Link>
        </figure>
        
            
    </div>
)}

export default CampgroundCard;


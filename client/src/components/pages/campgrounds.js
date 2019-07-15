import React, { Component } from "react";
import CampgroundCard from "../campgroundCard";
import Nav from "../nav";
import Header from "../header"
import Row from "../row"
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import API from "../../utils/API";



class Campgrounds extends Component {
    state = {
        aCampgrounds: [
            /*
            {name: "Cedar Breaks Park", imageURL:"https://www.texasoutside.com/campground/photo11/111/DSC_1503.JPG",
            description:"Boating is the most popular way to enjoy the lake, and a boat ramp is provided for guests. Fishing is excellent in the area, and the lake contains Black bass, White bass, Hybrid stripers, White crappie, Channel catfish and Flathead catfish, but its most known for its abundance of Smallmouth bass. The San Gabriel River Trail is a 26 mile rugged trail winding through dense juniper forest, hardwood bottomlands and prairie grasslands. The trail extends completely around Georgetown Lake via the dam and is open to hiking and biking. Hunting is available for for small game like dove, waterfowl, rabbit and squirrel, as well as white tail deer.  Hunting is by permit only."},
            {name: "McKinney Falls State Park", imageURL:"https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_357,q_75,w_537/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/McKinney-Falls_7586-6c76496804b1843_6c764b27-0839-df1b-2b507a091dbbbdbb.jpg",
            description:"Listen to Onion Creek flowing over limestone ledges and splashing into pools. Follow trails winding through the Hill Country woods. Explore the remains of an early Texas homestead and a very old rock shelter. All of this lies within Austin’s city limits at McKinney Falls State Park - what are you waiting for?"},
            {name: "Pace Bend Park", imageURL:"https://i.redd.it/01s0w9karwr01.jpg",
            description:" If you’re anywhere in the Spicewood area, check out this little, hidden natural gem, but bring cash because park admission does not accept credit cards. You’ll find a lot more to do here than you’d expect aside from the usual picnicking and hiking."},
            {name: "Inks Lake", imageURL:"https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2000,w_3000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/inks-late-1_cqlfft.jpg", Description:"Inks Lake State Park offers family fun on water and land. With its sparkling blue water, colorful rock outcrops, and striking sunsets, this gem of the Hill Country is just an hour northwest of Austin."}
        */
       ]
    }

    componentDidMount(){
        this.loadCampgrounds();
    }

    loadCampgrounds = () => {
        API.getcampgrounds()
        .then(res =>
            this.setState({aCampgrounds: res.data, name: "", imageURL: ""})
            )
        .catch(err => console.log(err));
         
    }
    
    render(){
        return  (
            <div>
                <Nav />
                <div className="container">
                    <Header>
                    <h1>Welcome to YelpCamp</h1>
                    <p>View hand-picked greater Austin area campgrounds</p>
                     
                    <Link to={'/campgrounds/new'}>
                        <button className="btn btn-info btn-lg">Add new campground</button>
                    </Link>
                    
                    </Header>
                    <Row>
                        {this.state.aCampgrounds.map( Campground => ( 
                          
                            <CampgroundCard
                            id={Campground._id}
                            name={Campground.name}
                            image={Campground.imageURL}
                            />
                        ))}
                    </Row>
                </div>
            </div>
        );

    }
}

export default Campgrounds;

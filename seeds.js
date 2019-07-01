const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");

const data = [
    {
        name:"Pace Bend Park",
        imageURL:"https://img.hipcamp.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1421954461/erklqo9lcwvaxni2zz3e/pace-bend-pace-bend-campground.jpg",
        description:"With more than nine miles of shoreline along scenic Lake Travis, Pace Bend is one of the most popular areas in the Highland Lakes region. Wide range of recreational opportunities include camping, boating and fishing."
    },
    {
        name:"Cedar Breaks Park",
        imageURL:"https://www.texasoutside.com/campground/photo11/111/DSC_1503.JPG",
        description:"Boating is the most popular way to enjoy the lake, and a boat ramp is provided for guests. Fishing is excellent in the area, and the lake contains Black bass, White bass, Hybrid stripers, White crappie, Channel catfish and Flathead catfish, but its most known for its abundance of Smallmouth bass. The San Gabriel River Trail is a 26 mile rugged trail winding through dense juniper forest, hardwood bottomlands and prairie grasslands. The trail extends completely around Georgetown Lake via the dam and is open to hiking and biking. Hunting is available for for small game like dove, waterfowl, rabbit and squirrel, as well as white tail deer.  Hunting is by permit only."
    },
    {
        name:"McKinney Falls State Park",
        imageURL:"https://ditchingsuburbia.com/images/blog_images/McKinneyFallsSP-1.jpg",
        description:"Listen to Onion Creek flowing over limestone ledges and splashing into pools. Follow trails winding through the Hill Country woods. Explore the remains of an early Texas homestead and a very old rock shelter. All of this lies within Austin’s city limits at McKinney Falls State Park - what are you waiting for?"
    },
    {
        name : "Turkey Bend",
        imageURL : "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description : "Discover the relaxation waiting to be unveiled at Turkey Bend Recreation Area. This 1,100 acre park is blanketed with Bluebonnets come springtime and speckled with Indian Paint Brush flowers in the summer. Whether you come for a day of picnicking or for a night of camping, Turkey Bend is suited for an adventure worth remembering."

    }

];


function seedDB() {
    Campground.remove({})
    .then(
        console.log("campgrounds removed"))
        .then(
        data.forEach(seed =>  {
            Campground
            .create(seed)
            .then( campground => {
                console.log("campground added")
                Comment.create(
                    {comment: "dogs allowed"}
                        
                    ).then(comment => {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("comment added")
                    }).catch(err =>
                        console.log(err))
            }      
            )
        }
        ))
}

module.exports = seedDB;
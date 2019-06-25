const db = require("../models");

//Define methods for the campgrounds controller

module.exports = {
    findAll: function(req, res){
        db.Campground.find(req.query)
            .sort({ date: -1 }) // sort by date added
            .then( dbModel => {res.json(dbModel)
            console.log("api/campgrounds findAll route was hit", dbModel)})
            .catch( err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Campground.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
            
    }

}
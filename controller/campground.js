const db = require("../models");

//Define methods for the campgrounds controller

module.exports = {
    findAll: function(req, res){
        db.Campground
        .find(req.query)
            .sort({ date: -1 }) // sort by date added
            .then( dbModel => res.json(dbModel))
            .catch( err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.Campground
        .findOne({_id:req.params.id})
        .then( dbModel => res.json(dbModel))
        .catch( err => res.json(err))
    },
    create: function(req, res){
        db.Campground
        .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
            
    },
    update: function(req, res) {
        db.Campground
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Campground
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

}
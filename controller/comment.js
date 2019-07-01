const db = require("../models");

//Define methods for the Comments controller

module.exports = {
    findAll: function(req, res){
        db.Comment
        .find(req.query)
            .sort({ date: -1 }) // sort by date added
            .then( dbModel => res.json(dbModel))
            .catch( err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.Comment
        .findOne({_id:req.params.id})
        .then( dbModel => res.json(dbModel))
        .catch( err => res.json(err))
    },
    create: function(req, res){
        db.Campground.findOne({_id:req.params.id}).populate("comments").exec(
            function(err, campground){
                if(err){
                    res.status(422).json(err)
                }else {
                // console.log("what is campground?: ")
                // console.log(campground)
                db.Comment
                .create(req.body)
                    .then(dbModel => {
                        campground.comments.push(dbModel);
                        campground.save();
                        res.json(campground);
                    })
                    .catch(err => res.status(422).json(err))
                }}
        )
        
                
    },
    update: function(req, res) {
        db.Comment
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Comment
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yelpCampSchema = new Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  description: {type: String},
  date: { type: Date, default: Date.now }
});

//compile yelpCampSchema into a model
const Campground = mongoose.model("Campground", yelpCampSchema);

module.exports = Campground;

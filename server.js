const express = require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const seeds = require('./seeds');

// seeds();// use seed file

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yelpcamp", {useNewUrlParser: true});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
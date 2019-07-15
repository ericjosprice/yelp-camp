import axios from "axios";

export default {
  // Gets all campgrounds
  getcampgrounds: function() {
    return axios.get("/api/campgrounds");
  },
  // Gets the campground with the given id
  getcampground: function(id) {
    return axios.get("/api/campgrounds/" + id);
  },
  editCampground:  function(campgroundData) {
    return axios.put("/api/campgrounds/" + campgroundData.ref, campgroundData)
  },
  // Deletes the campground with the given id
  deleteCampground: function(id) {
    console.log(id)
    return axios.delete("/api/campgrounds/" + id.id);
  },
  // Saves a campground to the database
  savecampground: function(campgroundData) {
    return axios.post("/api/campgrounds", campgroundData);
  },
  // Saves a comment to the database
  savecomment: function(commentData) {
    // console.log("what is commentData")
    // console.log(commentData)
    // console.log("what is id?")
    // console.log(commentData.ref)
    return axios.post("/api/comments/" + commentData.ref, commentData);
  },

  //Deletes comment
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id)
  }
};
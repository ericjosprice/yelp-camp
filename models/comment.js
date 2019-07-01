const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

//compile commentSchema into a model
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;


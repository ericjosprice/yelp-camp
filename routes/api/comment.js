const router = require("express").Router();
const commentsController = require("../../controller/comment");

// Matches with "/api/comments/:id
  router
  .route("/:id")
  .get(commentsController.findAll)
  .post(commentsController.create)
  .delete(commentsController.remove);

module.exports = router;
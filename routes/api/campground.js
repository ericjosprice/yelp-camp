const router = require("express").Router();
const campgroundsController = require("../../controller/campground");

// Matches with "/api/campgrounds"
router.route("/")
  .get(campgroundsController.findAll)
  .post(campgroundsController.create);

// Matches with "/api/campgrounds/:id"
router
  .route("/:id")
  .get(campgroundsController.findById)
  .put(campgroundsController.update)
  .delete(campgroundsController.remove);



module.exports = router;
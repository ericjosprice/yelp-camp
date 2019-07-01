const router = require("express").Router();
const campgroundRoutes = require("./campground");
const commentRoutes = require("./comment");

// campgrounds routes
router.use("/campgrounds", campgroundRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
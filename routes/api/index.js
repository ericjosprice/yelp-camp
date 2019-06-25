const router = require("express").Router();
const campgroundRoutes = require("./campground");

// campgrounds routes
router.use("/campgrounds", campgroundRoutes);

module.exports = router;
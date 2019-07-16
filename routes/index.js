const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



// Send every request to the React app
// Define any API routes before this runs
router.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
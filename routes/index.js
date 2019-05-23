const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./API");
const userRoutes = require('./user')

// Backend Routes
router.use("/user", userRoutes);
router.use("/api", apiRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

module.exports = router;
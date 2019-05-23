const express = require('express');
const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./API");
const userRoutes = require('./user')

// Backend Routes
router.use("/user", userRoutes);
router.use("/api", apiRoutes);


//serve production build with static routes if necesssary
if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	router.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
	router.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
  }

//otherwise serve dev build
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
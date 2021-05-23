const express = require("express");
const router = express.Router();
const asanaRoute = require("./asana.route");
const sequenceRoute = require("./sequence.route");

router.use("/asanas", asanaRoute);
router.use("/sequences", sequenceRoute);

module.exports = router;
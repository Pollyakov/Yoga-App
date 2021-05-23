const express = require("express");
const router = express.Router();
const sequenceController  = require("../controllers/sequence.controller");

//get all sequences
router
  .get("/", (req, res) => {
    //get all asanas
    asanaController.getAsanas(req, res);
  })
  .get("/:id", (req,res)=> {
    //get specific asana
    asanaController.getAsana(req, res);

  })


module.exports = router;
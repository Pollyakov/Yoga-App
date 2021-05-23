const express = require("express");
const router = express.Router();
const sequenceController  = require("../controllers/sequence.controller");

//get all sequences
router
  .get("/", (req, res) => {
    sequenceController.getSequences(req, res);
  })
  .get("/:id", (req,res)=> {
    //get specific sequence
    sequenceController.getSequence(req, res);
  })
  .post('/', (req, res) => {
    sequenceController.createSequence(req, res);
   })
   .delete("/:id", (req, res) => {
    //delete sequence
    sequenceController.deleteSequence(req, res);
  })
  .delete("/", (req, res) => {
    //delete all sequences
    sequenceController.deleteSequence(req, res);
  })
  .patch('/:id', async (req, res) => {
    // update
    sequenceController.updateSequence(req, res);
    })


module.exports = router;
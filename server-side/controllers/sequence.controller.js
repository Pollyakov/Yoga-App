const Sequence = require("../models/sequence");


const getSequences = async (req, res) => {
    try {
      const sequences = await Sequence.find({});
      res.send(sequenses);
    } catch (e) {
      res.status(400).send(e);
    }
  };

  const getSequence = async (req, res) => {
    const { id } = req.params;
    try {
      const sequence = await Sequence.findById(id);
      if (!sequence) {
        return res.status(400).send({ error: "Cannot find this sequence" });
      }
      res.send(sequence);
    } catch (e) {
      res.status(400).send(e.message);
    }
  };
//create sequence



  module.exports = {

    getSequences,
    getSequence
   
  
  };
  
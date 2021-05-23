const Sequence = require("../models/sequence");

const getSequences = async (req, res) => {
    try {
      const sequences = await Sequence.find({});
      res.send(sequences);
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
const createSequence = async (req, res)=> {
  try {
    const sequence = new Sequence(req.body)
    await sequence.save()
    res.status(201).send(sequence)
  } catch (e) {
    res.status(400).send(e.message)
  }
};

const deleteSequences = async (req, res) => {
  try {
    const sequences = await Sequence.deleteMany({});
    res.send(sequences);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const deleteSequence = async (req, res) => {
  const { id } = req.params;
  try {
    const sequence = await Sequence.findByIdAndDelete(id);
    if (!sequence) {
      return res.status(400).send({ error: "Cannot find sequence" });
    }
    res.send(sequence);
  } catch (e) {
    res.status(400).send(e.message);
  }
};


  module.exports = {
    getSequences,
    getSequence,
    createSequence,
    deleteSequences,
    deleteSequence
  };
  
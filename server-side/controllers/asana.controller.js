const Asana = require("../models/asana");

const getAsanas = async (req, res) => {
    try {
      const asanas = await Asana.find({});
      res.send(asanas);
    } catch (e) {
      res.status(400).send(e);
    }
  };

  const getAsana = async (req, res) => {
    const { id } = req.params;
    try {
      const asana = await Asana.findById(id);
      if (!asana) {
        return res.status(400).send({ error: "Cannot find this asana" });
      }
      res.send(asana);
    } catch (e) {
      res.status(400).send(e.message);
    }
  };

  module.exports = {

    getAsanas,
    getAsana,
  
  };
  
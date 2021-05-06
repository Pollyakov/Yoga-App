const mongoose = require("mongoose");
const Asana = mongoose.model("Asana", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    unique: true,
  },
  gif: {
    type: String,
    unique: true,
  },
});

module.exports = Asana;

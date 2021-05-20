const mongoose = require("mongoose");
const Asana = mongoose.model("Asana", {
 
  photo: {
    type: String,
    unique: true,
  },
  gif: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  directSrc: {
    type: String,
    unique: true,
  },

});

module.exports = Asana;

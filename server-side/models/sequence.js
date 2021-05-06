const mongoose = require("mongoose");
const  Sequence = mongoose.model("Sequience", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  boost: {
    type: String,
    unique: false,
  },
  asanas: {
      type: Array,
      require: true,
      validate(value) {
          if (value.length < 5) {
              throw new Error ("Must contain at least five asanas");
          }
      },
  },
  date: {
    type: Date,
    unique: false,
    require: true,
    default: Date.now,
  },
});

module.exports = Sequence;

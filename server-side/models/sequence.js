const mongoose = require("mongoose")
const sequenceSchema = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  boost: {
    type: String,
    unique: false,
  },
//   asanas: [{
//     asana: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'Asana'
//     }
// }],

asanas:[ {
  type: mongoose.Schema.Types.ObjectId,
  required: true,
  ref: 'Asana'
  }
],
  date: {
    type: Date,
    default: Date.now
  },
}

const  Sequence = mongoose.model("Sequence", sequenceSchema)

module.exports = Sequence;

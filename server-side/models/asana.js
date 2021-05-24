const mongoose = require("mongoose")
const asanaSchema = mongoose.Schema(
{
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
  })

const Asana = mongoose.model("Asana", asanaSchema)
asanaSchema.virtual('sequences', {
  ref: 'Sequence',
  localField: '_id',
  foreignField: 'asanas'
})


module.exports = Asana;

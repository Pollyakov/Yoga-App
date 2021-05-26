const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const route = require("./routes/index.routes.js");
require("./db/mongoose");


// const publicDirectoryPath = path.join(__dirname, "client/build");
// app.use(express.static(publicDirectoryPath));
app.use(cors());
app.use(express.json());
// app.get("/api/test", (req, res)=> {
//   res.send(user)
// })

//all of the true routes
app.use("/api/", route);

//if user asks unexisting route, it goes to homepage:
// app.get("*", (req, res)=> {
//   res.sendFile(path.join(__dirname + "client/build/index.html"));
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
//fetching asanas details per sequence id
const Sequence = require('./models/sequence')
const main = async () => {
   const sequence = await Sequence.findById('60abf84d3e20ae54d0d840cd')
   await sequence.populate('asanas').execPopulate()
   console.log(sequence.asanas[0].title)  //Tadhasana 
}
main()

////fetching sequence details from asanas ID
const Asana = require('./models/asana')
const mainB = async () => {
  const asana = await Asana.findById('60a52c1513a4df2aec7bfe2d')
  await asana.populate("sequences").execPopulate()
  console.log("asana.sequences",asana.sequences);
}
mainB()
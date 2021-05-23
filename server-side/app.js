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
//all of the true routes
app.use("/api/", route);

//if user asks unexisting route, it goes to homepage:
// app.get("*", (req, res)=> {
//   res.sendFile(path.join(__dirname + "client/build/index.html"));
// });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
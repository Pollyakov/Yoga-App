const mongoose = require("mongoose");
const keys = require("../config/keys");
const connection = mongoose.connection;
mongoose.connect("mongodb+srv://Pollyakov:1vsEA3LoQIpUT9Ki@asana-glossary.8rgya.mongodb.net/Yo?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    //dbName: "Yo",
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology:true,
});



// connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });



const express = require("express");
const app = express();

app.get("/api/asanas", (req,res)=> {
    console.log('hello, Ksu!');

});


const PORT= 3000;
app.listen(PORT, ()=> {
    console.log("listening...")
});
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.send("Home Page");
})

app.listen(3000, function(){
    console.log("Listening on port 3000");
})

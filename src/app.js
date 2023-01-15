const express = require("express");
require("./db/connection")
const path = require("path");
//const hbs = require('hbs');
const port = 3000;
const app = express();

// const staticpath = path.join(__dirname, "../public");
// console.log(staticpath)

// app.use(express.static(staticpath))
app.set("view engine","hbs")
//app.set('views',template_path)
app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,(req,res)=>{
        console.log(`port is running on port ${port}`)
})
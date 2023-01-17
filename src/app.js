const express = require("express");
require("./db/connection")
const path = require("path");
const hbs = require('hbs');
const port = 3000;
const app = express();
const Register = require("./models/registers");
const { urlencoded } = require("body-parser");
const staticpath = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// console.log(staticpath)

 app.use(express.static(staticpath))
app.set("view engine","hbs")
app.set("views",views_path)
hbs.registerPartials(partials_path)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//app.set('views',template_path)
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/register",(req,res)=>{
    res.render("register");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/register", async (req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if(password=== cpassword){
            const registerCandidate= new Register({
                name:req.body.name,
                phone :req.body.phone,
                age:req.body.age,

                email:req.body.email,

                password:req.body.password,
                cpassword:req.body.cpassword
            })
            const registered = await registerCandidate.save();
            res.status(201).render("index")
        }else{
            res.send("Your password and confirm password are not same")
        }
    }catch(e){
        res.status(404).send(e);
    }
})

app.post("/login",async (req,res)=>{
    try{

        const email = req.body.email;
        const password= req.body.password;

        const user = await Register.findOne({email:email})
        if(user){
            if(user.password===password){
                res.status(201).render("index")
            }else{
                res.status(400).send("Ivalid login")
            }
        }else{
            res.status(400).send("Ivalid login")
        }

        //console.log(`${email} and password ${password}`)

    }catch(e){
        res.status(400).send("Ivalid credentials")
    }
})

app.listen(port,(req,res)=>{
        console.log(`port is running on port ${port}`)
})




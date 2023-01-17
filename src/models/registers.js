const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone :{
        type:Number,
        required:true,
        unique:true
    },
    age: {
        type: Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    cpassword:{
        type:String,
        required:true
    }

})
//we need to add a collection
const Register = new mongoose.model("Register",employeeSchema)
module.exports= Register;
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/registration",{

}).then(() => {
    console.log("connection set up")
}).catch((err) => {
    console.log(err);
});
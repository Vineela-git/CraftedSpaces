const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    "fullname": String,
  "email" : String,
  "phone": String,     
 "location" : String,
"address": String,
"password": String
})

const userdetailsModel = mongoose.model("users", userSchema);
module.exports = userdetailsModel;
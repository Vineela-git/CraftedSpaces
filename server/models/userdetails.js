const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  pincode: String,
  licensenumber: String,
  password: String,
  userorprof: {
    type: String,
    default: "user",
  },
});

const userdetailsModel = mongoose.model("users", userSchema);
module.exports = userdetailsModel;

const mongoose = require("mongoose");
const professionalSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  company: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  pincode: String,
  licensenumber: String,
  password: String,
  userorprof: {
    type: String,
    default: "professional",
  },
});

const professionalModel = mongoose.model("professionals", professionalSchema);
module.exports = professionalModel;

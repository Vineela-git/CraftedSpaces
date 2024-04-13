const mongoose = require("mongoose");
const professionalSchema = new mongoose.Schema({
  
  companyname: String,
  firstname: String,
  lastname: String,
  email: String,
  professionaltype:String,
  officephone: String,
  personalphone: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  yearsofexperience: String,
  licensenumber: String,
  password: String,
  userorprof: {
    type: String,
    default: "professional",
  },
});

const professionalModel = mongoose.model("professionals", professionalSchema);
module.exports = professionalModel;

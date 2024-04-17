const mongoose = require("mongoose");
const professionalSchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  professionaltype: {
    type: String,
    required: true,
  },
  officephone: {
    type: String,
    required: true,
  },
  personalphone: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  yearsofexperience: {
    type: String,
    required: true,
  },
  licensenumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userorprof: {
    type: String,
    default: "professional",
  },
  instahandle: {
    type: String,
    default: "",
  },
  linkedinhandle: {
    type: String,
    default: "",
  },
  xhandle: {
    type: String,
    default: "",
  },
  aboutus: {
    type: String,
    default: "",
  },
  strategy: {
    type: String,
    default: "",
  },
  design: {
    type: String,
    default: "",
  },
  development: {
    type: String,
    default: "",
  },
  videoURL: {
    type: String,
    default: "",
  },
  profilePicture: {
    type: String,
    default: "",
  },
  additionalPictures: [String],
});

const professionalModel = mongoose.model("professionals", professionalSchema);
module.exports = professionalModel;

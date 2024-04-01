const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const userdetailsModel = require("./models/userdetails.js");
const professionalModel = require("./models/professionalDetails.js");
port = 3001;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/userdetails");

app.post("/signup", async (req, res) => {
  // Store a user/professional
  
  try {
    const userData = req.body;
    if(userData.companyname){
      professionalModel.create(userData)
      .then((professionals)=> res.json(professionals))
      .catch((err)=>res.json(err))
    }else{
      userdetailsModel
      .create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
    }
    
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    userdetailsModel.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("usersuccess");
        } else {
          res.json("invalid password");
        }
      } else {
        professionalModel.findOne({ email: email }).then((professional)=>{
          if (professional) {
            if (professional.password === password) {
              res.json("success");
            } else {
              res.json("invalid password");
            }
          }else{
            res.json("No records found, Please sign up first!")
          }
        })
    }
  })
  } catch {
    console.log("error trying to login", 401);
  }
});

app.get("/", function (req, res) {
  res.render("index", {});
});
// vvv On port 3001!
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
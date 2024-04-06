const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userdetailsModel = require("./models/userdetails.js");
const professionalModel = require("./models/professionalDetails.js");
const profSearch = require("./routes/professionalsSearch.js");
port = 3001;
const salt = 10;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api",profSearch)
mongoose.connect("mongodb://127.0.0.1:27017/userdetails");


app.post("/signup", async (req, res) => {
  // Store a user/professional

  try {
    const userData = req.body;
    const password = userData.password;
    bcrypt.hash(password, salt, function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        console.log(err);
      } else {
        userData.password = hash;
        if (userData.companyname) {
          professionalModel.findOne({ email: userData.email }).then((professional) => {
            if (professional) {
              res.json("existing");
            } else {
              professionalModel
                .create(userData)
                .then((professionals) => res.json(professionals))
                .catch((err) => res.json(err));
            }
          });
        } else {
          userdetailsModel.findOne({ email: userData.email }).then((user) => {
            if (user) {
              res.json("existing");
            } else {
              userdetailsModel
                .create(req.body)
                .then((users) => res.json(users))
                .catch((err) => res.json(err));
            }
          });
        }
      }
    });
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    userdetailsModel.findOne({ email: email }).then((user) => {
      if (user) {
        // if (user.password === password) {
        //   res.json("usersuccess");
        // } else {
        //   res.json("invalid password");
        // }
        bcrypt.compare(password, user.password, (err, result)=>{
          if(err){
            console.log(err)
          }else{
            if(result){
              res.json("usersuccess")
            }else{
              res.json("invalid")
            }
          }
        })
      } else {
        professionalModel.findOne({ email: email }).then((professional) => {
          if (professional) {
            // if (professional.password === password) {
            //   res.json("success");
            // } else {
            //   res.json("invalid password");
            // }
            bcrypt.compare(password,professional.password, (err, result)=>{
              if(err){
                console.log(err)
              }else{
                if(result){
                  res.json("success")
                }else{
                  res.json("invalid")
                }
              }
            })
          } else {
            res.json("No records found, Please sign up first!");
          }
        });
      }
    });
  } catch {
    console.log("error trying to login", 401);
  }
});

app.get("/", function (req, res) {
  res.render("index", {});
});
// let firstname = "";
// app.get("/search", async(req, res)=>{

//    const {firstname} = req.query;

//   try{
//     const professional = await professionalModel.findOne( {firstname });
//     res.json(professional);
  

//   }catch(error){
//     console.error(error);
//     res.status(500).json({ error: true, message: 'Server Error' });

//   }
// });
// vvv On port 3001!
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

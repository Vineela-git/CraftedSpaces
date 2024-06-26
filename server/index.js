require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require("express-jwt");
const userdetailsModel = require("./models/userdetails.js");
const professionalModel = require("./models/professionalDetails.js");
const {getProfDetails} = require("./Controllers/getprofdetails.js");
const profSearch = require("./routes/professionalsSearch.js");
const {login, register} = require("./Controllers/controller.js") ;
const { showDetails, updateDetails,chatCompononent } = require("./Controllers/editprofilecontroller.js");

const path = require("path");

port = 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api",profSearch)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), (req, res, next) => {
  const imagePath = path.join(__dirname, 'uploads', req.url.slice(1));
  console.log('Serving image:', imagePath);
  next();
}));
mongoose.connect("mongodb://127.0.0.1:27017/userdetails");
app.use('/secure', expressJwt({ secret: process.env.SECRET_KEY, algorithms: ['HS256'] }));

app.post("/signup", register );
app.post("/login", login);

app.put("/profile-edit", updateDetails);
app.get("/profile-edit", showDetails);
app.get("/my-account", showDetails);

app.put("/user-profile-edit",updateDetails);
app.get("/user-profile-edit",showDetails);
app.get("/user-my-account",showDetails);

app.get('/professionals/companyname/:companyName', getProfDetails);
app.get("https://api.chatengine.io/users/",chatCompononent);

app.get("/", function (req, res) {
  res.render("index", {});
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

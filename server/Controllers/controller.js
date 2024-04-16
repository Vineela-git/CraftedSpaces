require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userdetailsModel = require("../models/userdetails");
const professionalModel = require("../models/professionalDetails");
const jwt = require('jsonwebtoken');
const salt = 10;
const express = require('express');
const router = express.Router();



module.exports.register = async (req, res) => {
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
          professionalModel
            .findOne({ email: userData.email })
            .then((professional) => {
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
    return res.json(e.response.data);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    userdetailsModel.findOne({ email: email }).then((user) => {
      if (user) {
        // if (user.password === password) {
        //   res.json("usersuccess");
        // } else {
        //   res.json("invalid password");
        // }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            if (result) {
                const token = jwt.sign({ user }, process.env.SECRET_KEY || 'fallback_secret', { expiresIn: '30m' });
                return res.json({ token });
            } else {
             return res.json("invalid");
            }
          }
        });
      } else {
        professionalModel.findOne({ email: email }).then((professional) => {
          if (professional) {
            // if (professional.password === password) {
            //   res.json("success");
            // } else {
            //   res.json("invalid password");
            // }
            bcrypt.compare(password, professional.password, (err, result) => {
              if (err) {
                console.log(err);
              } else {
                if (result) {
                    const token = jwt.sign({ professional }, process.env.SECRET_KEY || 'fallback_secret', { expiresIn: '30m' });
                  return res.json({ token });
                } else {
                 return res.json("invalid");
                }
              }
            });
          } else {
           return res.json("No records found, Please sign up first!");
          }
        });
      }
    });
  } catch {
    console.log("error trying to login");
  }
};


// Route to fetch user data

require("dotenv").config();
const professionalModel = require("../models/professionalDetails");
const Cookies = require("cookies");
const jwt = require("jsonwebtoken");
const userdetailsModel = require("../models/userdetails");

module.exports.showDetails = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Check the user type
    if (decoded.professionalId) {
      // Retrieve professional details
      const professional = await professionalModel.findById(
        decoded.professionalId
      );
      console.log(professional);
      res.json(professional);
    } else {
      // Retrieve regular user details
      const user = await userdetailsModel.findById(decoded.userId);
      res.json(user);
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
module.exports.updateDetails = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.professionalId) {
      const professional = await professionalModel.findById(
        decoded.professionalId
      );
     
      // Update the professional object with the new data from the request body
      Object.assign(professional, req.body);

      // Save the updated professional
      const updatedProfessional = await professional.save();
      res.json(updatedProfessional);
    } else {
      const user = await userdetailsModel.findById(decoded.userId);
     // Update the user object with the new data from the request body
     Object.assign(user, req.body);

     // Save the updated user
     const updatedUser = await user.save();
     res.json(updatedUser);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

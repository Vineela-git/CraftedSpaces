const router=require("express").Router();
const { Router } = require("express");
const professionalModel = require("../models/professionalDetails");

router.get("/search",async(req,res) =>{
try{

// const page =parseInt(req.query.page) -1||0;
// const limit = parseInt(req.query.limit) ||5;
let firstname = req.query.firstname || "";
let lastname = req.query.lastname || "";
let companyname = req.query.companyname||"";
let city = req.query.city||"";
let state = req.query.state||"";
let type = req.query.professionaltype || "";

// let sortBy={};
// if(sort[1]){
//     sortBy [sort[0]]=sort[1];
// } else{
//     sortBy[sort[0]] = "asc";

// }
// const filter = {
//     firstname: { $regex: firstname, $options: "i" },
//     lastname: { $regex: lastname, $options: "i" },
//     companyname: { $regex: companyname, $options: "i" },
//     location: { $regex: location, $options: "i" },
//     type: { $regex: type, $options: "i" },
//   };
const filter = {};

    if (firstname) {
      filter.firstname = { $regex: firstname, $options: "i" };
    }

    if (lastname) {
      filter.lastname = { $regex: lastname, $options: "i" };
    }

    if (companyname) {
      filter.companyname = { $regex: companyname, $options: "i" };
    }

    if (city) {
      filter.city = { $regex: city, $options: "i" };
    }
    if (state) {
        filter.state = { $regex: state, $options: "i" };
      }

    if (type) {
      filter.type = { $regex: type, $options: "i" };
    }

//Fetch the professionals that match the specified search criteria (filters).

const search = await professionalModel.find(filter);
res.status(200).json({
    error:false,
    data: search
});
console.log(search)






}catch(err){
    console.log(err);
    res.status(500).json({error:true,message:"Server Error"})

}


})

module.exports= router;
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5001;
const locationRoutes = require('./routes/location-routes');
// Creating App Object by executing express as a function.

const app = express();

// this is added here as a  middleware
// The path indicates that express js will only forward the requests of this path to location routes middle.
//api/location/anything will also forward

app.use('/api/location',locationRoutes);

app.use((error,req,res,next) =>{

    if('/message3'){
        return res.status(404).json({message:"Not a valid message"});
      }
});


app.listen(PORT);

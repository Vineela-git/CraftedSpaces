const express = require("express");
const router = express.Router();

router.get('/message1',(req,res,next) => {

console.log('GET request locations');
// sends back response with JSON data. 
res.json({message1:"It Works again?"});

});

  router.get('/message2', (req, res) => {
    res.json({message2: "Would this work too?"});


    
  });

 

// export syntax for exporting router constant. 
module.exports=router;

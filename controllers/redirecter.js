'use strict'

const express = require('express');
const router = express.Router();
const Shrink = require('../model/Shrink')


router.get('/:key', async (req,res,next)=> {  
  try {
    const key = req.params.key; 
    console.log("key is: ", key);
    const shrinked = await Shrink.findOne({key})
    console.log("shrinked; ", shrinked);

    const URL = shrinked.url;
    
    res.redirect(URL)
    
  }  catch(err) {
      res.send({success: false, message: err.message})
  }
})

module.exports = router
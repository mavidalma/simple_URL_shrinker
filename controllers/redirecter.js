'use strict'

const express = require('express');
const router = express.Router();
const Shrink = require('../model/Shrink')


router.get('/:key', async (req,res,next)=> {  
  try {
    const key = req.params.key; 
    const shrinked = await Shrink.findOne({key})

    const URL = shrinked.url;
    
    res.redirect(URL)
    
  }  catch(err) {
      res.send({success: false, message: err.message})
  }
})

module.exports = router
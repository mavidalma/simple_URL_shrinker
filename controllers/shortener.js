'use strict';
require('dotenv').config();

const conn = require('../lib/mongooseConnect');

const express = require('express');
const router = express.Router();
const Shrink = require('../model/Shrink')


router.post("/", async (req,res,next)=> {  
  try {
    const url = req.body.url; 
    let key = await Shrink.createKey();

    const data = {
        url,
        key
    }
  
    const shrinked = new Shrink(data);
    const savedDoc = await shrinked.save();
    const shortURL = `${process.env.URL_HOSTED}/${shrinked.key}`;
    
    res.send({success: true, url: shortURL})
    
  }  catch(err) {
      res.send({success: false, message: err.message})
  }
});

module.exports = router
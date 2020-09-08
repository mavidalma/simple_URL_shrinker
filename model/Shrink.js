'use strict';

require('dotenv').config()

const mongoose = require('mongoose');

const shrinkSchema = mongoose.Schema({
  url: { type: String, unique: true, index: true, required: true },
  key: { type: String, required: true },
  //you can add as many features as you may like, for simplicty I would just use the previous two, but I'm leaving a few examples below
  triggered_by: { type: String, index: true },
  user: {type: String, index: true},
  campaign: { type: String, index: true },
  date: { type: Date },
  used: [],
});

shrinkSchema.statics.createKey = async function  () {
  const key = Math.random().toString(36).substring(2, 10);
 /* let key;
  let exists;

  do {
   key = Math.random().toString(36).substring(2, 10);
   exists =  await Shrink.findOne({key});
   console.log(exists)
  } 
  while (exists)*/
  return key;
};

shrinkSchema.statics.buildURL = () => {
  return `${process.env.URL_HOSTED}/${this.key}`
}


const Shrink = mongoose.model('Shrink', shrinkSchema);

module.exports = Shrink;
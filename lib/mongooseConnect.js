'use strict';

const mongoose = require('mongoose');

const connection = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  connection.on('open', () => {
    console.log('connected to ' + connection.name);
  });
  
  connection.on('error', err => {
    console.error('connection error ', err);
  });
  
  module.exports = connection;

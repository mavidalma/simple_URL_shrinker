'use strict';
require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors');
const port = process.env.PORT_AVAILABLE


app.use(cors());
app.use(morgan('dev'));
app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  })
);

app.use(express.urlencoded({ extended: false }));

const mongooseConnection = require('./lib/mongooseConnect');

app.listen(port, () => {
    console.log(`URLshortener is live on port ${port}`)
  })

  app.use('/', require('./controllers/redirecter'))
  app.use('/short', require('./controllers/shortener'))

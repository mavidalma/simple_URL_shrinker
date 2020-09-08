'use strict';

require('dotenv').config();

const conn = require('./lib/mongooseConnect');
const Shrink = require('./model/Shrink');

conn.once('open', async () => {
  try {
    await initShrink();
    conn.close();

  } catch (err) {
    console.error('there has been an error reinitializing the DB: ', err);
    process.exit(1);
  }
});

const initShrink = async () => {
  await Shrink.deleteMany();
  await Shrink.insertMany([
    {
        '_id': '5e6e8e074763f31a1ad53674',
        'url': 'https:www.mavidalma.es',
        'key': '00000000'
    }
])
};
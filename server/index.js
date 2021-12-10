const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const port = 3002;
const db = require('../database/index.js');
//const database = require('../database/index.js');

//use process.env.API_TOKEN for API calls


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/gimmeMyDog', (req, res) => {
  console.log('quiz incoming: ', req.query.homeSize)
  let dogSize = req.query.homeSize;
  db.gimmeMyDog(dogSize)
    .then((matches) => {
      //console.log('matches on server: ', matches);
      res.send(matches);
    })
    .catch((error) => {
      console.log('error finding a dog: ', error);
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
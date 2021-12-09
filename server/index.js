const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const port = 3002;
//const database = require('../database/index.js');

//use process.env.API_TOKEN for API calls


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/gimmeMyDog', (req, res) => {
  console.log('quiz incoming: ', req.query)
  axios.get('https://api.thedogapi.com/v1/breeds', {
    headers: {
      "x-api-key": process.env.API_TOKEN
    }
  })
    .then((dogs) => {
      console.log('success getting dogs from API: ', dogs);
      res.send('Hello World');

    })
    .catch((error) => {
      console.log('error getting dogs from API: ', error);
      res.send(error);
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
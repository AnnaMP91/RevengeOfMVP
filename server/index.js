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

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
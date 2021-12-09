require('dotenv').config();
const axios = require('axios');
const db = require('../../database/index.js');

axios.get('https://api.thedogapi.com/v1/breeds', {
  headers: {
    "x-api-key": process.env.API_TOKEN
  }
})
  .then((response) => {
    //console.log('success getting dogs: ', response.data);
    for (var i = 0; i < response.data.length; i++) {
      let dogData = response.data[i]
      //console.log('this is the dogdata: ', dogData);
      db.addDogs(dogData);
    }
  })
  .catch((error) => {
    console.log('error getting dogs: ', error);
  })

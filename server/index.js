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

//DOG API *********************************************
// app.get('/gimmeMyDog', (req, res) => {
//   console.log('quiz incoming: ', req.query.homeSize)
//   let dogSize = req.query.homeSize;
//   db.gimmeMyDog(dogSize)
//     .then((matches) => {
//       //console.log('matches on server: ', matches);
//       res.send(matches);
//     })
//     .catch((error) => {
//       console.log('error finding a dog: ', error);
//     })
// })

//PET FINDER API*************************************
app.get('/gimmeMyDog', (req, res) => {
  console.log('quiz answers: ', req.query);
  let myDogMatches = [];
  let paramConfig = {
    type: 'Dog',
    location: '35007',
    size: req.query.homeSize,
    status: 'adoptable',
    age: req.query.age,
    limit: 100
  }
  if (req.query.experience === 'inexperienced') {
    paramConfig.house_trained = true;
  }

  if (req.query.children === 'both') {
    paramConfig.good_with_children = true;
    paramConfig.good_with_dogs = true;
    paramConfig.good_with_cats = true;
  }

  if (req.query.children === 'children') {
    paramConfig.good_with_children = true;
  }

  if (req.query.children === 'pets') {
    paramConfig.good_with_dogs = true;
    paramConfig.good_with_cats = true;
  }



  axios.get('https://api.petfinder.com/v2/animals', {
    headers: {
      Authorization: `Bearer ${process.env.PET_FINDER_ACCESS_TOKEN}`
    },
    params: paramConfig
  })
    .then(function (response) {
      console.log('dogs in my area: ', response.data.animals);
      let dogs = response.data.animals;
      for (var i = 0; i < dogs.length; i++) {
        if (req.query.activity === 'active' && (dogs[i].tags.includes('Playful') || dogs[i].tags.includes('Active'))) {
          myDogMatches.push(dogs[i]);
        } else if (req.query.activity === 'inactive' && (!dogs[i].tags.includes('Playful') || !dogs[i].tags.includes('Active'))) {
          myDogMatches.push(dogs[i]);
        }
      }
      let finalDogs = [];
      for (var i = 0; i < myDogMatches.length; i++) {
        if (myDogMatches[i].photos.length !== 0) {
          finalDogs.push(myDogMatches[i]);
        }
      }
      res.send(finalDogs);
    })
    .catch(function (error) {
      console.log(error);
    })
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
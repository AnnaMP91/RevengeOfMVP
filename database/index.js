const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const dogSchema = new mongoose.Schema({
  name: String,
  bred_for: String,
  weight: Object,
  life_span: String,
  temperament: String,
  image: Object
});

const Dog = mongoose.model('Dog', dogSchema);

let addDogs = (dogsArray) => {
  return new Promise((resolve, reject) => {
    Dog.insertMany(dogsArray)
      .then((response) => {
        console.log('success seeding db: ', response);
        resolve();
      })
      .catch((error) => {
        console.log('error seeding db: ', error);
        reject();
      })
    //let dogSlice = dogs.slice(0, 5);
    //console.log('dogs on the db: ', dogSlice);
    // dogs on the db:  {
    //   weight: { imperial: '9 - 31', metric: '4 - 14' },
    //   height: { imperial: '10 - 23', metric: '25 - 58' },
    //   id: 262,
    //   name: 'Xoloitzcuintli',
    //   breed_group: 'Non-Sporting',
    //   life_span: '12 - 14 years',
    //   temperament: 'Cheerful, Alert, Companionable, Intelligent, Protective, Calm',
    //   reference_image_id: 'HkNS3gqEm',
    //   image: {
    //     id: 'HkNS3gqEm',
    //     width: 1500,
    //     height: 1350,
    //     url: 'https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg'
    //   }
    // }

  })
}

let findMyDogs = (characteristics) => {
  return new Promise((resolve, reject) => {


  })
}

module.exports.addDogs = addDogs;
module.exports.findMyDogs = findMyDogs;


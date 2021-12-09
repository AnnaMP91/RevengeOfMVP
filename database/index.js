const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const dogSchema = new mongoose.Schema({
  name: String,
  bred_for: String,
  weight: String,
  height: String,
  life_span: String,
  temperament: String,
  image: String
});

const Dog = mongoose.model('Dog', dogSchema);

let addDogs = (dogs) => {
  console.log('dogs on the db: ', dogs)
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
}

module.exports.addDogs = addDogs;


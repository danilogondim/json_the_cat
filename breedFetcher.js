const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body)[0];
    if (data) {
      return callback(null, data.description);
    }
    return callback("Breed not found!", null);
  });
};

module.exports = { fetchBreedDescription };
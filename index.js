const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

if (breedName === undefined) {
  console.log("Please provide a breed name.");
  process.exit();
}

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});
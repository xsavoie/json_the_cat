const request = require("request");
const args = process.argv.slice(2);
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error !== null) {
    return console.log("Encountered error");
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    return console.log("Breed not found");
  }
  console.log(data[0]["description"]);
});
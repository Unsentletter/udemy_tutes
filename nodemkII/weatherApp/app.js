const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=55%20the%20boulevarde%20oak%20flats',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
})

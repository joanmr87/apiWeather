const request = require('request');
const constants = require('../../config');

const weatherData = (address, callback) => {
    const url = constants.openWeather.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeather.SECRET_KEY;
    console.log('esto es url', url);
    callback(true);
}

module.exports = weatherData;
let location = require('../controllers/locationController');
const axios = require('axios');
const OPEN_WEATHER_API_KEY = 'dae887303074e0abbab7d84ccb2e2f1a'

//open weather api get current weather
const currentController = { 
    
    getCurrent : async (req, res) => {
      const city = req.query.city;
      if (city) {
        try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`);
        res.json(response.data);
        } catch (error) {
          console.log("error", error);
          res.status(404).json({
            status: 'fail',
            message: 'City not found'
          });
        }
      } else {
        try {
          console.log("entro al try de la 24");
          location = await location.getLocation();
          console.log("location", location);
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${OPEN_WEATHER_API_KEY}`);
          res.json(response.data);
        } catch (error) {
          console.log("error", error);
          res.status(404).json({
            status: 'fail',
            message: error.message,
          });
        }
      }
    }
}
module.exports = currentController;





const location = require('../controllers/locationController');
const axios = require('axios');
const OPEN_WEATHER_API_KEY = 'dae887303074e0abbab7d84ccb2e2f1a'

//open weather api get current weather
const currentController = { 
    
    getCurrent : async (req, res) => {
      const city = req.query.city;
      console.log("city", city);
      console.log("req.params", req.query);
      if (city) {
        console.log("entro al if");
        try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`);
        console.log("ESTO ES RESPONSE.data current controller ln23", response.data);
        res.json(response.data);
        } catch (error) {
            console.log(error);
            }
      } else {
        console.log("entro al else");
        try {
          location = await location.getLocation();
          console.log("location", location);
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${OPEN_WEATHER_API_KEY}`);
          console.log("ESTO ES RESPONSE.data current controller ln23", response.data);
          res.json(response.data);
        } catch (error) {
            console.log(error);
        }
      }
    }
}
module.exports = currentController;





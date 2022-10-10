let location = require('../controllers/locationController');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const currentController = { 
    getCurrent : async (req, res) => {
      const city = req.query.city;
      if (city) {
        try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        res.json(data);
        } catch (error) {
          res.status(404).json({
            status: 'fail',
            message: 'City not found'
          });
        }
      } else {
        try {
        location = await location.getLocation();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`);
        const data = await response.json();
        res.json(data);
        } catch (error) {
          res.status(404).json({
            status: 'fail',
            message: error.message,
          });
        }
      }
    }
}
module.exports = currentController;





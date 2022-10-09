const location = require('../controllers/locationController');
const axios = require('axios');
const OPEN_WEATHER_API_KEY = 'dae887303074e0abbab7d84ccb2e2f1a';

const forecastController = {
    getForecast: async (req, res) => {
        const city = req.query.city;
        if (city) {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_API_KEY}`);
                res.json(response.data);
            } catch (error) {
                res.status(404).json({
                    status: 'fail',
                    message: 'City not found'
                });
            }
        } else {
            try {
                console.log("Entra al try");
                const latLong = await location.getLocation();
                console.log("latLong", latLong);
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong.latitude}&lon=${latLong.longitude}&appid=${OPEN_WEATHER_API_KEY}`);
                res.json(response.data);
            }
            catch (error) {
                res.status(404).json({
                    status: 'fail',
                    message: error.message,
                });
            }
        }
    }
}

module.exports = forecastController;

//create controller to get location from ip

const axios = require('axios');

const locationController = {
    getLocation: async (req, res) => {
        try {
            const location = await axios.get('http://ip-api.com/json');
            console.log("PASO POR LA 9 De LOCATION CONTROLLER", location.data);
            res.json({
                status: location.data.status,
                data: location.data
            });
        } catch (error) {
            res.status(404).json({
                status: 'fail',
                message: error.message,
            });                               
        } 
    }
}

module.exports = locationController;


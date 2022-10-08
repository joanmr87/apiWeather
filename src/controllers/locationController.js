//create controller to get location from ip

const axios = require('axios');

const locationController = {
    getLocation: async (req, res) => {
        try {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log("ip", ip);
            const response = await axios.get(`http://ip-api.com/json/${ip}`);
            console.log("ESTO ES RESPONSE.data location controller ln9", response.data);
            res.json(response.data);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = locationController;


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const IP = require('ip');

const locationController = {
    getLocation: async (req, res) => {
       try {
            const ipAddress = IP.address();
            const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
            let data = await response.json();
            if (data.status == 'fail') {
                const response = await fetch(`http://ip-api.com/json/`);
                data = await response.json();
            }
            return data;
        } catch (error) {
            res.status(404).json({
                status: 'fail',
                message: error.message,
            });
        }
    }
}


module.exports = locationController;


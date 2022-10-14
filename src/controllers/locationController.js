
const fetchLatitudeLongitude = require('../utils/fetchLatitudeLongitude');

const location = {
    getLocation: async (req, res) => {
       try {
            const data = await fetchLatitudeLongitude();
            res.send(data);
        } catch (error) {
            res.status(404).json({
                status: 'fail',
                message: error.message,
            });
        }
    }
}


module.exports = location;


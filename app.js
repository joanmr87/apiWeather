const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const mainRouter = require('./src/routes/main');
const location = require('./src/routes/location');
const current = require('./src/routes/current');
const forecast = require('./src/routes/forecast');
app.use(express.json());



app.use('/v1', mainRouter)
app.use('/location', location);
app.use('/current', current);
app.use('/forecast', forecast);
app.get('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Route not found'
    });
});


const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };

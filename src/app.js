const express = require("express");
const app = express();
const path = require("path");


const mainRouter = require("./routes/main");
const location = require("./routes/location");
const current = require("./routes/current");
const forecast = require("./routes/forecast");


app.use(express.json());

app.set('views', path.join(__dirname, '/views'));

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

module.exports = app;


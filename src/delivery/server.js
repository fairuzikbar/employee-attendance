const express = require('express');
const config = require('../config/config');
const appRoute = require('./routes/app.routes');
const jsonMiddleware = require('./middleware/json.middleware');

require('dotenv').config();
const { port, host } = config();

const Server = () => {
    const app = express();
    app.use(jsonMiddleware);
    app.use(appRoute);

    app.listen(port, host, () => {
        console.info(`App running on port ${port}`)
    })
}

module.exports = Server;
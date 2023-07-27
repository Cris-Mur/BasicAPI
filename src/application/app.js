const express = require('express')
const application = express();

application.disable('x-powered-by');
application.use(express.json({limit: '1mb'}));
application.use(express.urlencoded({limit:'1mb', extended: true}));

module.exports = application
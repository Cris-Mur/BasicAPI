/**
 * Module class application to make a new instance.
 * @module app
 */
require('./utils');
const express = require('express');
const config = require('./config');

class Application {
    app=undefined;
    constructor() {
        this.app = express();
        //this.app.use(settings)
        // to over write express base middlewares 
        // let otherOptionMiddlewares = {};
        // config.setup(this.app, otherOptionMiddlewares);
        config.setup(this.app);
        // Disable 'x-powered-by' header for security, if you know that is 
        // Express you know that's machine.
        this.app.disable('x-powered-by');
    }
}
/**
 * Exports the configured Express application instance.
 * @type {Object}
 */
module.exports = new Application().app;

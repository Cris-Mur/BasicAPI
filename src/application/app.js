/**
 * Module class application to make a new instance.
 * @module app
 */
const express = require('express');
const config = require('./config');

/**
 * @class Application
 * This Class encapsulate Express implementation.
 */
class Application {
    constructor() {
        this.express = express();
        //this.app.use(settings)
        // to over write express base middlewares 
        // let otherOptionMiddlewares = {};
        // config.setup(this.app, otherOptionMiddlewares);
        this.express = config.setup(this.express);
        // Disable 'x-powered-by' header for security, if you know that is 
        // Express you know that's machine.
        this.express.disable('x-powered-by');
        console.debug("[Application instance]");
    }
    get express() {
        return this.express;
    }
}
/**
 * Exports the configured Express application instance.
 * @type {Object}
 */
module.exports = Application;

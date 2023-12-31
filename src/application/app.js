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
        this.express = Application.setup(this.express);
        // Disable 'x-powered-by' header for security, if you know that is 
        // Express you know that's machine.
        this.express.disable('x-powered-by');
        console.debug("[Application instance]");
    }
    /**
     * @function setup - configuration application feature
     * @param {Express.Application} input 
     * @returns 
     */
    static setup (input) {
        return config.setup(input);
    }
}
/**
 * Exports the configured Express application instance.
 * @type {Object}
 */
module.exports = Application;

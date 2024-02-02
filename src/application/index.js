/**
 * Module class application to make a new instance.
 * @module app
 */
const express = require('express');
const config = require('./builder');
const network = require('./network');


/**
 * @class Application
 * This Class encapsulate Express implementation.
 */
class Application {
    constructor() {
        this.init();
    }

    init() {
        this.express = express();
        //this.app.use(settings)
        // to over write express base middlewares 
        // let otherOptionMiddlewares = {};
        // config.setup(this.app, otherOptionMiddlewares);
        this.express = Application.setup(this.express);
        this.setupNetwork(this.express);
        console.debug("[Application instance]");
    }

    /**
     * 
     * @param {Express instance} application 
     */
    setupNetwork(application) {
    console.debug('[Application]', application.mountpath);

    // Normalize the port and set it on the application
    const port = network.utils.port;
    application.set('port', port);

    // Create and start the server
    const server = network._http.create_server(application);
    server.listen(port);

    // Handle server errors and listening events
    server.on('error', network._http.onError);
    server.on('listening', network._http.onListening);
    this.server = server;
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
module.exports = new Application();

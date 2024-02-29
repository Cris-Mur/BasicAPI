/**
 * Module class application to make a new instance.
 * @module app
 */

require('dotenv').config();
const express = require('express');
const builder = require('./builder');
const network = require('./network');


const boolean = require("./utils/parse/boolean");


/**
 * @class Application
 * This Class encapsulate Express & Http sever implementation.
 */
class Application {
    constructor() {
        this.init();
    }

    /**
     * Function to start a new application instance
     */
    init() {
        this.express = express();
        // use a
        // builder.setup(this.app, otherOptionMiddlewares);
        this.express = builder(this.express);
        this.setupNetwork(this.express);
        console.debug("[one instance of application ready]");
    }

    /**
     * 
     * @param {Express instance} application 
     */
    setupNetwork(application) {
        if (boolean(process.env.SERVERLESS))
            return;
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
}
/**
 * Exports the configured Express application instance.
 * @type {@class<Application>}
 */
module.exports = Application;

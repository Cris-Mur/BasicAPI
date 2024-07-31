/**
 * @module application
 * @license MIT
 * Module class application to make a new instance.
 * @author Cris-Mur
 */

const requireUnCached = require('#Utils/requireUnCached');

/**
 * @class BasicAPI
 * @description This Class encapsulates Express & HTTP server implementation.
 * @property {ExpressController} #application - The application instance.
 * @property {Function} build - Function to build the application.
 * @property {Object} #network - Network configuration for the application.
 */
class BasicAPI {
    #application = undefined;
    build;
    #network;
    constructor() {
        this.build = require('./build');
        this.#network = require('./network');
        this.startup();
    }

    /**
     * @function loadEnvironment
     * @description Loads the environment variables from the .env file.
     */
    loadEnvironment() {
        try {
            process.loadEnvFile();
        } catch (error) {
            try {
                process.loadEnvFile('./env.example');
                console.warn('[####][WARNING][####][RUN APPLICATION WITH ENVIRONMENT EXAMPLE]');
            } catch (error) {
                console.warn('[####][WARNING][####][RUN APPLICATION WITHOUT ENVIRONMENT FILE]');
            }
        }
    }

    /**
     * @function loadLogger
     * @description Loads the custom logger.
     */
    loadLogger() {
        require('#Utils/logger');
    }

    /**
     * @function initNetwork
     * @description Initializes the network interface.
     */
    initNetwork() {
        this.#network.http.initTCPInterface(this.#network.port.getPort());
    }

    /**
     * @function initApplication
     * @description Builds a new application instance and sets the request listener.
     */
    initApplication() {
        this.initNetwork();
        this.#application = this.build();
        this.#network.http.
            setRequestListener(
                this.#application.getApplication()
            );

        console.debug("[BasicAPI][initApplication]",
            this.#application.getApplication().name,
            "[was mounted]"
        );
    }

    /**
     * @function getApplication
     * @description Returns the application instance.
     * @returns {ExpressController | express} The application instance.
     */
    getApplication() {
        return this.#application;
    }

    /**
     * @function startup
     * @description Loads environment, logger, and initializes the application.
     */
    startup() {
        this.loadEnvironment();
        this.loadLogger();
        this.initApplication();
    }

    /**
     * @function reset
     * @description Resets the network configuration by requiring it uncached.
     */
    reset() {
        this.#network = requireUnCached('./network', __dirname);
    }
}

/**
 * @exports {@class<BasicAPI>}
 */
module.exports = new BasicAPI;
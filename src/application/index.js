/**
 * @module application
 * @license MIT
 * Module class application to make a new instance.
 * @author Cris-Mur
 */

const requireUnCached = require('#Utils/requireUnCached');

/**
 * @class BasicAPI
 * @description This Class encapsulate Express & Http sever implementation.
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

    loadLogger() {
        require('#Utils/logger');
    }

    initNetwork() {
        this.#network.http.initTCPInterface(this.#network.port.getPort());
    }

    /**
     * @function - to build a new application instance
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
     * @returns <ExpressController> | <express>
     */
    getApplication() {
        return this.#application;
    }

    startup() {
        this.loadEnvironment();
        this.loadLogger();
        this.initApplication();
    }

    reset() {
        this.#network = requireUnCached('./network', __dirname);
    }
}
/**
 * @exports {@class<BasicAPI>}
 */
module.exports = new BasicAPI;

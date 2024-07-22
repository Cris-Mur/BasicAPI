/**
 * @module application
 * @license MIT
 * Module class application to make a new instance.
 * @author Cris-Mur
 */

process.loadEnvFile();
const network = require('./network');
const builder = require('./build');

/**
 * @class BasicAPI
 * @description This Class encapsulate Express & Http sever implementation.
 */
class BasicAPI {
    #application = undefined;
    constructor() {
        this.initApplication();
        this.initNetwork();
    }
    
    initNetwork () {
        const server = network.http;
        server.initTCPInterface(network.port.getPort());
        server.setRequestListener(this.#application.getApplication());
        console.debug(
            '[BasicAPI][#### Network PORT ####]\n', 
            network.port.getPort()
        );
    }

    /**
     * @function - to build a new application instance
     */
    initApplication () {
        this.#application = builder();
        console.debug(`[this instance ${this.getApplication()} was mounted]`);
    }

    /**
     * @function getApplication
     * @returns <ExpressController> | <express>
     */
    getApplication() {
        return this.#application;
    }
}
/**
 * @exports {@class<BasicAPI>}
 */
module.exports = new BasicAPI;

/**
 * @module application
 * @license MIT
 * Module class application to make a new instance.
 * @author Cris-Mur
 */

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
    }

    initNetwork() {
        network.http.initTCPInterface(network.port.getPort());
    }

    /**
     * @function - to build a new application instance
     */
    initApplication() {
        this.initNetwork();
        this.#application = builder();
        network.http.
            setRequestListener(this.#application.getApplication());

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

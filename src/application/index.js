/**
 * @module application
 * @license MIT
 * Module class application to make a new instance.
 * @author Cris-Mur
 */

process.loadEnvFile();
const builder = require('./build');

/**
 * @class Application
 * This Class encapsulate Express & Http sever implementation.
 */
class BasicAPI {
    constructor() {
        this.init();
    }

    /**
     * @function - to build a new application instance
     */
    init() {
        this.application = builder();
        console.debug(`[this instance ${this.getApplication()} was mounted]`);
    }

    getApplication() {
        return this.application;
    }
}
/**
 * Exports the configured Express application instance.
 * @type {@class<BasicAPI>}
 */
module.exports = new BasicAPI;

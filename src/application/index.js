/**
 * Module the application.
 * @module Application
 */
const Application = require('./app');
const middlewares = require("./middlewares");
const router = require('../services/router');

/**
 * Fabric pattern to creates a new instance for application.
 * @param {string} env - The environment in which the application is running.
 * @returns {Object} The configured Express application instance.
 */
function factory() {
    const API = new Application();
    const application = API.express;
    // Global Middlewares
    application.use(middlewares.inspector);
    application.use("/", router); // Default Router
    application.use(middlewares.cannotGet);
    application.use(middlewares.errorHandler);
    return application;
}
/**
 * Exports the function for configuring and starting up the application.
 * @type {Object}
 */
module.exports = factory();

/**
 * @module Index
 * @description 
 * This module serves as the entry point for importing and exporting the main 
 * builders used within the application. It includes the ExpressBuilder 
 * for creating Express applications and the Builder for other types of builds.
 * @license MIT
 * @author @Cris-Mur
 */

const Builder = require('./builder');
const ExpressBuilder = require('./Express');

/**
 * @type {Object}
 * @property {Builder} Builder - The generic builder module.
 * @property {ExpressBuilder} ExpressBuilder - The Express application builder module.
 */
module.exports = {
    Builder,
    ExpressBuilder
};

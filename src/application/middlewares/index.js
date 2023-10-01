/**
 * Module for exporting the gobal middlewares.
 * @module ExportInspector
 */

const { inspector } = require('./inspector');
const { cannotGet } = require('./cannot_get');
const { errorHandler } = require('./error_handler');
/**
 * Exports the request inspection middleware.
 * @type {Object}
 */
module.exports = {
    inspector,
    cannotGet,
    errorHandler
};

/**
 * Module for exporting the gobal middlewares.
 * @module ExportInspector
 */

const { inspector } = require('./inspector');

/**
 * Exports the request inspection middleware.
 * @type {Object}
 */
module.exports = {
    inspector
};

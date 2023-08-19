/**
 * Module for creating and configuring an HTTP server instance.
 * @module HttpServerConfiguration
 */

const http = require('node:http');
const { normalizePort } = require('./events/utils/norm_port');
const { onListening } = require('./events/on_listening');
const { onError } = require('./events/on_error');

/**
 * Exports an object with functions and modules related to the HTTP server.
 * @type {Object}
 */
module.exports = {
    /**
     * Creates an HTTP server instance.
     * @function
     * @param {...*} args - Arguments passed to http.createServer.
     * @returns {http.Server} The created HTTP server instance.
     */
    create_server: http.createServer,
    /**
     * Normalizes a port value.
     * @function
     * @param {string|number} val - The port value to be normalized.
     * @returns {number|boolean|string} The normalized port value, or false if invalid.
     */
    normalizePort,
    /**
     * Handles server listening events and logs the listening address.
     * @function
     */
    onListening,
    /**
     * Handles server error events and provides error-specific messages.
     * @function
     * @param {Error} error - The error object representing the server error.
     */
    onError
};

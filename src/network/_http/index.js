/**
 * Module for creating and configuring an HTTP server instance.
 * @module HttpServerConfiguration
 */

const http = require('node:http');
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

/**
 * Module for handling server error events.
 * @module ServerErrorHandling
 */

const { port_env } = require('../../../bin/utils/port_enviroments');

const port = port_env();

/**
 * Handles server error events and provides error-specific messages.
 * @param {Error} error - The error object representing the server error.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // Handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Exports the function for handling server error events.
 * @type {Object}
 */
module.exports = { onError };

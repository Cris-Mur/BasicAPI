/**
 * Module for handling server error events.
 * @module ServerErrorHandling
 */

let { port } = require('../../utils');
const boolean = require('../../../utils/parsers/boolean');

/**
 * Handles server error events and provides error-specific messages.
 * @param {Error} error - The error object representing the server error.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // Handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            if (boolean.parse(process.env.RESILIENT_PORT)) {
                port = parseInt(port) + 1;
                console.warn(
                "[ Normal Startup Interrupted PORT IN USE ERROR trying with new port]",
                    port
                );
                this.listen(port);
            } else {
                console.error(bind + ' is already in use');
                process.exit(1);
            }
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

/**
 * Module for handling server error events.
 * @module ServerErrorHandling
 */

const PortController = require('../../port');
const boolean = require('#Utils/boolean');

/**
 * Handles server error events and provides error-specific messages.
 * @param {Error} error - The error object representing the server error.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    let port = PortController.getPort();
    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    // Handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            throw new Error(`${bind} requires elevated privileges`);
        case 'EADDRINUSE':
            if (boolean(process.env.RESILIENT_PORT)) {
                port = parseInt(port) + 1;
                console.warn(
                    "[ Normal Startup Interrupted PORT IN USE ERROR trying with new port]",
                    port
                );
                PortController.setPort(port);
                const BasicAPI = require('#Application');
                const network = require('#Network');
                network.http.restartServer();
                BasicAPI.initApplication();
                this.closeAllConnections();
            } else {
                const port_in_use = new Error(`${bind} is already in use`);
                throw port_in_use;
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

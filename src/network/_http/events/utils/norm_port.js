/**
 * Module for normalizing port values.
 * @module PortNormalization
 */

/**
 * Normalizes a port value.
 * @param {string|number} val - The port value to be normalized.
 * @returns {number|boolean|string} The normalized port value, or false if invalid.
 */
function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // Named pipe
        return val;
    }

    if (port >= 0) {
        // Port number
        return port;
    }

    // Invalid port
    return false;
}

/**
 * Exports the function for normalizing port values.
 * @type {Object}
 */
module.exports = {
    normalizePort
};

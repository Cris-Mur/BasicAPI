/**
 * Module for determining the port based on the environment.
 * @module getPortInEnvironment
 */

/**
 * Determines the appropriate port based on the environment.
 * @returns {number} The determined port value.
 */
function getPortInEnvironment() {
    switch (process.env.NODE_ENV) {
        case 'production':
            return process.env.PORT ?? 0;
        case 'development':
            return process.env.PORT_DEV ?? process.env.PORT ?? 0;
        default:
            return process.env.PORT ?? 6666;
    }
}

/**
 * Exports the function for determining the port based on the environment.
 * @type {Object}
 */
module.exports = getPortInEnvironment;

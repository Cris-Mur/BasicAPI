/**
 * Module for determining the port based on the environment.
 * @module PortEnvironment
 */

/**
 * Determines the appropriate port based on the environment.
 * @returns {number} The determined port value.
 */
function port_env() {
    let port;
    let env = process.env.NODE_ENV;

    switch (env) {
        case 'production':
            port = process.env.PORT || 0;
            break;
        case 'development':
            port = process.env.PORT_DEV || process.env.PORT || 0;
            break;
        default:
            port = process.env.PORT || 0;
            break;
    }

    return port;
}

/**
 * Exports the function for determining the port based on the environment.
 * @type {Object}
 */
module.exports = {
    port_env
};

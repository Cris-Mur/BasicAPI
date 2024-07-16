const normalize = require('./normalize');
const getPortInEnvironment = require('./get_port_in_environment');

/**
 * function to get port of application
 * @returns {Number}
 */
function getPort() {
    return normalize(
        getPortInEnvironment()
    );
}

module.exports = getPort();

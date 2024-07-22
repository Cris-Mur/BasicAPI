/**
 * Application Network Module.
 * @module HttpUtilities
 */

const http = require('./http');
const port = require('./port');

/**
 * Exports an object with HTTP-related utility modules.
 * @type {Object}
 */
module.exports = { 
    http,
    port
};

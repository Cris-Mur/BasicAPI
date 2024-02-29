/**
 * Module for handling server listening events.
 * @module ServerListeningHandling
 */

const os = require('node:os');

/**
 * Handles server listening events and logs the listening address.
 */
function onListening() {
    const addr = this.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    console.log(`Application process id: ${process.pid}`);
    console.log(
        `Listening on ${bind}\n
        http://localhost:${addr.port}\n
        http://${os.hostname}:${addr.port}
        `
    );
}

/**
 * Exports the function for handling server listening events.
 * @type {Object}
 */
module.exports = { onListening };

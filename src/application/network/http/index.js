
const HTTP = require('./http_controller');

const { onListening } = require('./events/on_listening');
const { onError } = require('./events/on_error');

const OHTTP = new HTTP();
console.debug(OHTTP.getRegisteredEvents());

OHTTP.setEvent("error", onError);
OHTTP.setEvent("listening", onListening);

console.debug(OHTTP.getRegisteredEvents());
/**
 * Exports an object with functions and modules related to the HTTP server.
 * @type {Object}
 */
module.exports = OHTTP; 

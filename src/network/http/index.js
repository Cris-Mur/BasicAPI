const http = require('http');
const { normalizePort } = require('./events/utils/norm_port')
const port = normalizePort(process.env.PORT)
const { onListening } = require('./events/on_listening');
const { onError } = require('./events/on_error');

module.exports = {
    create_server: http.createServer,
    normalizePort,
    onListening,
    onError
};

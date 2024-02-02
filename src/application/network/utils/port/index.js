const normalize = require('./normalize');
const env = require('./get_port_in_environment');

const port = normalize(env());

module.exports = port;

const normalize = require('./normalize');
const env = require('./get_port_in_environment');

class Port {
    port = undefined;
    constructor () {
        this.port = normalize(env());
        return this.port;
    }
    set port(newPort) {
        this.port = normalize(newPort);
    }
}


module.exports = new Port().port;

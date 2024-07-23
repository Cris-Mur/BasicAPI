class PortController {
    #port;
    constructor() {
        this.loadPort();
    }

    getPort() {
        return this.#port;
    }

    setPort(port) {
        port = this.normalizePort(port);
        this.#port = port;
        process.env.PORT = port;
        return port;
    }

    getPortOfEnv() {
        switch (process.env.NODE_ENV) {
            case 'production':
                return process.env.PORT ?? 0;
            case 'development':
                return process.env.PORT_DEV ?? process.env.PORT ?? 6661;
            default:
                return process.env.PORT ?? 0;
        }
    }

    normalizePort(value) {
        const port = parseInt(value, 10);

        if (isNaN(port)) {
            // Named pipe
            return value;
        }

        if (port >= 0) {
            // Port number
            return port;
        }

        // Invalid port
        return false;
    }

    loadPort() {
        const port = this.getPortOfEnv();
        return this.setPort(port);
    }
}

module.exports = new PortController();

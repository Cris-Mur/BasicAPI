class PortController {
    #port;

    constructor() {
        this.#port = this.normalizePort(this.loadPortOfEnv());
        process.env.PORT = this.#port;
    }

    getPort() {
        return this.#port;
    }

    loadPortOfEnv() {
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
}

module.exports = new PortController();

/**
 * @module HttpController
 * @description - 
 * @license MIT
 * @autor Cris-mur
 */
const http = require("node:http");

/**
 * @class HttpController
 * @description - 
 * @private @property {object} # - 
 */
class HttpController {
    #events;
    #server;
    /**
     * @constructor
     * @description - 
     */
    constructor() {
        this.#events = {};
        this.#server = this.createHTTPServer();
        this.interface = this.#server.address();
    }

    getRegisteredEvents() {
        return this.#events;
    }

    createHTTPServer() {
        return http.createServer();
    }

    setRequestListener(requestListener) {
        this.setEvent("request", requestListener);
    }
    /**
     * @method 
     * @description - 
     * @param {string} property - 
     */
    initTCPInterface(port) {
        this.#server.listen(port);
        this.interface = this.#server.address();
        console.debug('[INIT][TCP Interface]', this.interface);
    }

    setEvent(eventName, eventHandler) {
        this.#server.on(eventName, eventHandler);
        if (eventName in this.#events)
            this.#events[eventName].push(eventHandler);
        else
            this.#events[eventName] = [eventHandler];
    }
}

module.exports = HttpController;

/**
 * @module HttpController
 * @description - 
 * @license MIT
 * @autor Cris-mur
 */
const http = require("node:http");
const { onError } = require('./events/on_error')
const { onListening } = require('./events/on_listening')

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
        this.initServer()
    }
    
    initServer() {
        this.#server = this.createHTTPServer();
        this.interface = this.#server.address();
        this.#events = {};
        this.setBaseEvents();
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

    setBaseEvents() {
        this.setEvent("error", onError);
        this.setEvent("listening", onListening);
    }

    restartServer() {
        this.#server.closeAllConnections();
        this.initServer();
    }
}

module.exports = new HttpController();

/**
 * @module ExpressController
 * @description - Controller of express application instance
 * @license MIT
 * @autor Cris-mur
 */

const express = require('express');
const path = require('node:path');

/**
 * @class ExpressController
 * @description - Class Controller of one express instance.
 * @property {object} #features - Private property for storing features.
 * @property {object} #locals - Private property for storing local variables.
 */
class ExpressController {
    #features;
    #locals;
    #app;

    /**
     * @constructor
     * @description - Initializes a new instance of the ExpressController class.
     */
    constructor() {
        this.#app = express();
        this.#features = { "/": [] };
        this.#locals = this.#app.locals;
    }

    /**
     * @method getFeatures
     * @description - Returns the features of the application.
     * @returns {object} The features of the application.
     */
    getFeatures() {
        return this.#features;
    }

    /**
     * @method getLocals
     * @description - Returns the local variables of the application.
     * @returns {object} The local variables of the application.
     */
    getLocals() {
        return this.#locals;
    }

    /**
     * @method getApplication
     * @description - Returns the express application instance.
     * @returns {object} The express application instance.
     */
    getApplication() {
        return this.#app;
    }

    /**
     * @method pushInFeatures
     * @description - Adds a feature to the specified path.
     * @param {object} feature - The feature to add.
     * @param {string} [route='/'] - The path to add the feature to.
     */
    pushInFeatures(feature, route = "/") {
        if (route in this.#features) {
            this.#features[route].push(feature);
        } else {
            this.#features[route] = [feature];
        }
    }

    /**
     * @method addGlobalFeature
     * @description - Adds a global feature to the application.
     * @param {object} feature - The global feature to add.
     */
    addGlobalFeature(feature) {
        this.#app.use(feature);
        this.pushInFeatures(feature);
    }

    /**
     * @method addRoutedFeature
     * @description - Adds a routed feature to the application.
     * @param {string} route - The path to add the feature to.
     * @param {object} feature - The feature to add.
     */
    addRoutedFeature(route, feature) {
        this.#app.use(route, feature);
        this.pushInFeatures(feature, route);
    }

    /**
     * @method setFavicon
     * @description - Sets the favicon for the application.
     * @param {string} faviconPath - The path to the favicon.
     */
    setFavicon(faviconPath) {
        const faviconMiddleware = (req, res) => {
            const favicon = faviconPath;
            res.sendFile(path.join(process.cwd(), favicon));
        };
        this.addRoutedFeature('/favicon.ico', faviconMiddleware);
    }

    /**
     * @method disableProperty
     * @description - Disables a property in the application settings.
     * @param {string} property - The property to disable.
     * @returns {boolean} The disabled state of the property.
     * @throws {Error} Throws an error if the property does not exist.
     */
    disableProperty(property) {
        if (property in this.#app.settings) {
            this.#app.disable(property);
            return this.#app.disabled(property);
        } else {
            throw new Error(
                `The property ${property} does not exist in application settings.`
            );
        }
    }

    /**
     * @method enableProperty
     * @description - Enables a property in the application settings.
     * @param {string} property - The property to enable.
     * @returns {boolean} The enabled state of the property.
     * @throws {Error} Throws an error if the property does not exist.
     */
    enableProperty(property) {
        if (property in this.#app.settings) {
            this.#app.enable(property);
            return this.#app.enabled(property);
        } else {
            throw new Error(
                `The property ${property} does not exist in application settings.`
            );
        }
    }

    /**
     * @method getProperty
     * @description - Gets a property from the application settings.
     * @param {string} property - The property to get.
     * @returns {any} The value of the property.
     */
    getProperty(property) {
        if (property in this.#app.settings) {
            return this.#app.get(property);
        } else {
            return undefined;
        }
    }

    /**
     * @method setApplicationLocalVar
     * @description - Sets a local variable in the application.
     * @param {string} localKey - The key of the local variable.
     * @param {any} localValue - The value of the local variable.
     */
    setApplicationLocalVar(localKey, localValue) {
        this.#app.locals[localKey] = localValue;
    }

    /**
     * @method getApplicationLocalVar
     * @description - Gets a local variable from the application.
     * @param {string} localKey - The key of the local variable.
     * @returns {any} The value of the local variable.
     */
    getApplicationLocalVar(localKey) {
        return this.#app.locals[localKey];
    }

    /**
     * @method unSetApplicationLocalVar
     * @description - Unsets a local variable in the application.
     * @param {string} localKey - The key of the local variable.
     * @returns {any} The deleted value of the local variable.
     */
    unSetApplicationLocalVar(localKey) {
        const deletedValue = this.getApplicationLocalVar(localKey);
        delete this.#app.locals[localKey];
        return deletedValue;
    }

    /**
     * @method setApplicationSetting
     * @description - Sets a setting in the application.
     * @param {string} name - The name of the setting.
     * @param {any} value - The value of the setting.
     * @returns {any} The set value.
     */
    setApplicationSetting(name, value) {
        this.#app.set(name, value);
        return this.getProperty(name);
    }

    /**
     * @method settupApplicationNetworkPort
     * @description - Sets up the network port for the application.
     * @param {number} port - The port to set.
     * @returns {any} The set port.
     */
    settupApplicationNetworkPort(port) {
        return this.setApplicationSetting("port", port);
    }
}

module.exports = ExpressController;

/**
 * @module ExpressController
 * @description - Controller of express application instance
 * @license MIT
 * @author Cris-mur
 */

const express = require('express');
const path = require('node:path');


/**
 * @class ExpressController
 * @description - Class Controller of one express instance.
 * @property {object} #features
 * @property {object} - #locals
 */
class ExpressController {
    
    #features;
    #locals;
    #app;

    constructor() {
        this.#app = express();
        this.#features = {"/": []};
        this.#locals = this.#app.locals;
    }

    getFeatures() { return this.#features; }

    getLocals() { return this.#locals; }

    getApplication() { return this.#app; }

    pushInFeatures(feature, path="/") {
        if (path in this.#features) {
            this.#features[path].push(feature);
        } else
            this.#features[path] = [feature];
    }

    addGlobalFeature(feature) {
        this.#app.use(feature);
        this.pushInFeatures(feature);
    }

    addRoutedFeature(path, feature) {
        // Default path "/"
        this.#app.use(path, feature);
        this.pushInFeatures(feature, path);
    }

    setFavicon(faviconPath) {
        const faviconMiddleware = (req, res) => {
            const favicon = faviconPath;
            res.sendFile(path.join(process.cwd(), favicon));
        }
        this.addRoutedFeature('/favicon.ico', faviconMiddleware);
    }

    disableProperty(property) {
        if (property in this.#app.settings) {
            this.#app.disable(property);
            return this.#app.disabled(property);
        } else {
            throw new Error(
                `the property ${property} don't exist in application settings.`
            );
        }
    }

    enableProperty(property) {
        if (property in this.#app.settings) {
            this.#app.enable(property);
            return this.#app.enabled(property);
        } else {
            throw new Error(
                `the property ${property} don't exist in application settings.`
            );
        }
    }

    getProperty(property) {
        if (property in this.#app.settings) {
            return this.#app.get(property);
        } else {
            return undefined;
        }
    }

    setApplicationLocalVar(localKey, localValue) {
        this.#app.locals[localKey] = localValue;
    }

    getApplicationLocalVar(localKey) {
        return this.#app.locals[localKey];
    }

    unSetApplicationLocalVar(localKey) {
        const deletedValue = this.getApplicationLocalVar(localKey);
        delete this.#app.locals[localKey];
        return deletedValue;
    }

    setApplicationSetting(name, value) {
        this.#app.set(name, value);
        return this.getProperty(name);
    }

    settupApplicationNetworkPort(port) {
        return this.setApplicationSetting("port", port);
    }
}

module.exports = ExpressController;
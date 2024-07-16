const express = require('express');

class ExpressController {
    constructor() {
        this.app = express();
        this.features = [];
        this.locals = {};
    }

    getFeatures() {
        return this.features;
    }
    
    getLocals() {
        return this.locals;
    }
    
    getApplication() {
        return this.app;
    }

    pushGeneralFeature(feature) {
        this.app.use(feature);
        this.features.push(feature);
    }

    pushPathFeature(feature, path = "/") {
        this.app.use(path, feature);
        this.features.push(feature);
    }

    setPort(port) {
        this.app.set("port", port);
    }

    overrideLocals(newLocals) {
        if (typeof newLocals !== "object")
            throw new Error('newLocals must be a object');
        this.locals = newLocals;
    }
}

module.exports = ExpressController;
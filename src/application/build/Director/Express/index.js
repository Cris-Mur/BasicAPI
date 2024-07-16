const Director = require('../director');
const { ExpressBuilder } = require('../../builders');

class ExpressDirector extends Director {
    constructor() {
        super();
        this.builder = new ExpressBuilder();
        console.debug("[ExpressDirector][Constructor][Init new instance of ExpressDirector]");
    }

    make(typeofProduct) {
        this.builder.reset();
        if (typeofProduct === "simple") {
            console.debug('[ExpressDirector][make][Making a simple product]');
            this.builder.stepBasic();
        } else {
            console.debug('[ExpressDirector][make][Making a complex product]');
            this.builder.stepDisablePoweredby();
            this.builder.stepSetFavicon();
            this.builder.stepBuildinFeatures();
            this.builder.stepSwagger();
            this.builder.stepSetInspector();
            this.builder.stepSetRouter();
            this.builder.stepSetErrorHandler();
            this.builder.stepSetLocals();
            this.builder.stepSetNetwork();
        }
        return this.builder.getProduct();
    }
}

module.exports = ExpressDirector;
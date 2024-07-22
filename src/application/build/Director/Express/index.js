const Director = require('../director');
const { ExpressBuilder } = require('../../builders');

class ExpressDirector extends Director {
    #builder = undefined;
    constructor(builder) {
        super();
        this.#builder = builder;
        console.debug("[ExpressDirector][Constructor][Init new instance of ExpressDirector]");
    }

    make() {
        this.#builder.reset();
        console.debug('[ExpressDirector][make][Making a complex product]');
        this.#builder.stepDisablePoweredby();
        this.#builder.stepSetFavicon();
        this.#builder.stepBuildinFeatures();
        this.#builder.stepSwagger();
        this.#builder.stepSetInspector();
        this.#builder.stepSetRouter();
        this.#builder.stepSetErrorHandler();
        this.#builder.stepSetLocals();
        return this.#builder.getResult();
    }
}

module.exports = new ExpressDirector(new ExpressBuilder());
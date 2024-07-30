const Director = require('../director');

class ExpressDirector extends Director {
    #builder = undefined;

    setBuilder(builder) {
        console.debug("[ExpressDirector][setBuilder][####]", builder);
        this.#builder = builder;
    }

    make() {
        console.debug("[ExpressDirector][make][Making a complex product]");
        this.#builder.reset();
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

module.exports = ExpressDirector;
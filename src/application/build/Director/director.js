class Director {
    static #builder = undefined;
    
    /**
     * make function
     * @returns 
     */
    static make() {
        return;
    };

    static setBuilder(builder) {
        console.debug('[Director][SET][Builder]', builder.name);
        this.#builder = builder;
    }

    static getBuilder() {
        return this.#builder;
    }
}

module.exports = Director;
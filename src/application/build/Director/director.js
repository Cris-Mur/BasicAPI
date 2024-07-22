class Director {
    static #builder = undefined;
    
    /**
     * make function
     * @returns 
     */
    static make() {
        return;
    };

    static changeBuilder(newBuilder) {
        this.#builder = newBuilder;
        return this.#builder;
    }
}

module.exports = Director;
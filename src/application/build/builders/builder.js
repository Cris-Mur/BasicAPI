class Builder {
    static #result;
    static reset() {
        this.#result = {};
    }

    static getResult() {
        return this.#result;
    }
}

module.exports = Builder;
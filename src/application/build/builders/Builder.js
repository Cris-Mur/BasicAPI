/**
 * @module Builder
 * @description - Module for building and obtaining results.
 * @license MIT
 * @autor Cris-Mur
 */

/**
 * @class Builder
 * @description - Class for building and obtaining results.
 * @property {object} #result - Stores the result.
 */
class Builder {
    static #result;

    /**
     * @method reset
     * @description - Resets the result to an empty object.
     */
    static reset() {
        this.#result = {};
    }

    /**
     * @method getResult
     * @description - Returns the current result.
     * @returns {object} The current result.
     */
    static getResult() {
        const result = this.#result;
        this.reset();
        return result;
    }
}

module.exports = Builder;

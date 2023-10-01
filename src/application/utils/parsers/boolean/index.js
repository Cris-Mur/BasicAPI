/**
 * Module for parsing string values to boolean.
 * @module BooleanParser
 */

/**
 * Parses a string value to a boolean.
 * @param {string} input - The string value to be parsed.
 * @returns {boolean} The parsed boolean value.
 */
function parse(input) {
    const rex = new RegExp("true", "i");
    return rex.test(input);
}

/**
 * Exports the function for parsing string values to boolean.
 * @type {Object}
 */
module.exports = {
    parse
};

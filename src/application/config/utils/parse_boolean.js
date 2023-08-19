/**
 * Module for parsing string values to boolean.
 * @module BooleanParser
 */

/**
 * Parses a string value to a boolean.
 * @param {string} input - The string value to be parsed.
 * @returns {boolean} The parsed boolean value.
 */
function parseBoolean(input) {
    return input === 'true' || input === 'True';
}

/**
 * Exports the function for parsing string values to boolean.
 * @type {Object}
 */
module.exports = {
    parseBoolean
};

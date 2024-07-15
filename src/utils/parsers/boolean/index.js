/**
 * Module for parsing string values to boolean.
 * @module boolean
 * @license MIT
 * @author Cris-Mur
 */

/**
 * Parses a string value to a boolean.
 * @param {string} input - The string value to be parsed.
 * @returns {boolean} The parsed boolean value.
 */
function parse(input) {
    const rex = /true/i;
    return rex.test(input);
}

/**
 * Exports the function for parsing string values to boolean.
 * @type {Object}
 */
module.exports = parse;

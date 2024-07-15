/**
 * Module for splitting a comma-separated string into an array.
 * @module CsvSplitter
 */

/**
 * Splits a comma-separated string into an array.
 * @param {string} input - The string to be split.
 * @param {string} [separator=','] - The separator used for splitting the string.
 * @param {boolean} [verbose=false] - Whether to display verbose error messages.
 * @returns {Array|string|undefined} An array containing the split elements, or an error message in verbose mode, or undefined if an error occurs.
 */
function parse(input, separator = ',') {
    try {
        if (typeof input !== 'string')
            return [];

        if (input.length < 1)
            return [];

        return input.split(separator);
    } catch (_error) {
        console.error('[Error on CSV parser][ at splitting string]', _error.message);
        console.debug('[Error on CSV parser]', _error);
        return undefined;
    }
}

/**
 * Exports the function for splitting a comma-separated string into an array.
 * @type {Object}
 */
module.exports = {
   parse
};

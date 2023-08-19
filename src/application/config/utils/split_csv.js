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
function splitCsv(input, separator = ',', verbose = false) {
    try {
        if (typeof input !== 'string')
            throw new Error('Input must be a string');

        if (input.length < 1)
            return [];

        return input.split(separator);
    } catch (_error) {
        if (verbose) {
            console.error('[Error at splitting string]', _error);
        } else {
            console.error('[Error at splitting string]', _error.message);
        }
        return undefined;
    }
}

/**
 * Exports the function for splitting a comma-separated string into an array.
 * @type {Object}
 */
module.exports = {
    splitCsv
};

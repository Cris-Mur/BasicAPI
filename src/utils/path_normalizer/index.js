/**
 * Module for handling path normalization and error handling.
 * @module PathHandling
 */

const path = require('node:path');

/**
 * Normalizes a given path and handles potential errors.
 * @param {string} input - The path to be normalized.
 * @param {boolean} [verbose=false] - Whether to display verbose error messages.
 * @returns {string} The normalized path or a fallback path in case of error.
 */
function _normalize(input, verbose = false) {
    try {
        console.log('[normalize path]', input.length > 1 ? input : '<void>');
        return path.normalize(input);
    } catch (_error) {
        if (verbose) {
            console.error('[Error handling path ]', input, _error);
        } else {
            console.error('[Error handling path]', input, _error.message);
        }
        return path.normalize('./');
    }
}

/**
 * Exports the function for handling path normalization and error handling.
 * @type {Object}
 */
module.exports = {
    _normalize
};

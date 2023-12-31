const _json = require('./_json');
const _raw = require('./_raw');
const _static = require('./_static');
const _text = require('./_text');
const _urlencoded = require('./_urlencoded');
const _cors = require('./_cors');

/**
 * A collection of exported utility modules and options.
 * @typedef {Object} Options
 * @property {Object} _json - The utility module for JSON-related options.
 * @property {Object} _raw - The utility module for raw data-related options.
 * @property {Object} _static - The utility module for serving static files-related options.
 * @property {Object} _text - The utility module for text data-related options.
 * @property {Object} _urlencoded - The utility module for URL-encoded data-related options.
 */
module.exports = {
    _json,
    _raw,
    _static,
    _text,
    _urlencoded,
    _cors
};

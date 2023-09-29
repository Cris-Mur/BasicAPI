const express = require("express");
const {parseBoolean} = require('../utils/parse_boolean');
/**
 * Returns an options object for JSON parsing with configurable settings.
 *
 * @param {Function|null} [reviver=null] - A function that transforms the results. (Optional)
 * @param {function} [verify=undefined] - An optional parameter for verification purposes. (Optional)
 * @returns {Object} - The options object with the following properties:
 *   - `inflate` {boolean} - Whether to inflate JSON objects or not. Defaults to `true`.
 *   - `limit` {string} - The maximum size of JSON data to be parsed. Defaults to `'100kb'`.
 *   - `strict` {boolean} - Whether to use strict JSON parsing or not. Defaults to `true`.
 *   - `type` {string} - The Content-Type for the JSON data. Defaults to `"application/json"`.
 *   - `reviver` {Function|null} - A function that transforms the results during parsing. (Optional)
 *   - `verify` {function|undefined} - An optional parameter for verification purposes. (Optional)
 *
 * @example
 * // Usage example:
 * const options = handlerOptions(myReviverFunction, myVerifyFunction);
 * console.log(options);
 *  Output: {
 *    inflate: true,
 *    limit: '100kb',
 *    strict: true,
 *    type: 'application/json',
 *    reviver: myReviverFunction,
 *    verify: myVerifyFunction
 *  }
 */
function handlerOptions(reviver=null, verify=undefined) {
    let options = {
        inflate: parseBoolean(process.env.JSON_INFLATE) || true,
        limit: process.env.JSON_LIMIT || '100kb',
        strict: parseBoolean(process.env.JSON_STRICT) || true,
        type: process.env.JSON_TYPE || "application/json",
        reviver,
        verify
    }
    console.log('[ JSON OPTIONS ]', JSON.stringify(options));
    return options;
}

module.exports = express.json(handlerOptions());
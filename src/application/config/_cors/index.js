const express = require("express");
const cors = require("cors");
const boolean = require('../../../utils/parsers/boolean');
const { port } = require('../../../network/utils');
/**
 * Returns an options object for JSON parsing with configurable settings.
 *
 * @param {Function|null} [reviver=null] - A function that transforms the results. (Optional)
 * @param {function} [verify=undefined] - An optional parameter for verification purposes. (Optional)
 * @returns {Object} | undefined
 * @example
 * // Usage example:
 * const json = factoryJson(myReviverFunction, myVerifyFunction);
 * console.log(json);
 *  Output: [Function: jsonParser]
 */
let whitelist = [
`http://localhost:${port}`
];
console.debug("[CORS Whitelist]", whitelist);
    
let options = function (req, callback) {
    let corsOptions;
    console.warn("whitelist", whitelist);
    console.debug('origin', req.header('Origin'))
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

module.exports = cors(options);

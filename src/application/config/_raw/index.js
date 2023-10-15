const express = require("express");
const boolean = require('../../../utils/parsers/boolean');

/**
 * Represents the options for request handling.
 * @typedef {Object} RequestHandlingOptions
 * @property {boolean} inflate - Indicates if the response data should be inflated.
 * @property {string} limit - The size limit for incoming request data.
 * @property {string} type - The expected content type of the incoming request data.
 * @property {Function} verify - A verification function for validating request data.
 */

/**
 * Generates request handling options with default values and customizable verification.
 * @param {Function} [verify=undefined] - An optional verification function.
 * @returns {RequestHandlingOptions} Options for handling incoming requests.
 */
function factoryRaw(verify = undefined) {
    if (!boolean.parse(process.env.RAW)) {
        return undefined;
    }
    /**
     * The options for request handling.
     * @type {RequestHandlingOptions}
     */
    let options = {
        inflate: boolean.parse(process.env.RAW_INFLATE) ?? true,
        limit: process.env.RAW_LIMIT ?? '100kb',
        type: process.env.RAW_TYPE ?? "application/octet-stream",
        verify
    };

    console.debug('[ RAW OPTIONS ]', JSON.stringify(options));

    return express.raw(options);
}

/**
 * Exports the function to generate request handling options.
 * @type {Object}
 */
module.exports = factoryRaw();

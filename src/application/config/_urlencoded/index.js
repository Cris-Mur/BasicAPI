/**
 * Module for handling options related to parsing URL-encoded data.
 * @module UrlEncodedParsingOptions
 */
const express = require("express");
const { parseBoolean } = require("../utils/parse_boolean");

/**
 * Represents the options for parsing URL-encoded data.
 * @typedef {Object} UrlEncodedParsingOptions
 * @property {boolean} extended - Indicates if extended syntax for URL-encoded data is enabled.
 * @property {boolean} inflate - Indicates if response data should be inflated.
 * @property {string} limit - The size limit for incoming URL-encoded data.
 * @property {number} parameterLimit - The maximum number of parameters allowed in the data.
 * @property {string} type - The expected content type of the incoming URL-encoded data.
 * @property {Function} verify - A verification function for validating URL-encoded data.
 */

/**
 * Generates options for parsing URL-encoded data with customizable settings.
 * @param {Function} [verify=undefined] - An optional verification function.
 * @returns {UrlEncodedParsingOptions} Options for parsing URL-encoded data.
 */
function handlerOptions(verify = undefined) {
    /**
     * The options for parsing URL-encoded data.
     * @type {UrlEncodedParsingOptions}
     */
    let options = {
        extended: parseBoolean(process.env.URLENCODED_EXTENDED) || true,
        inflate: parseBoolean(process.env.URLENCODED_INFLATE) || true,
        limit: process.env.URLENCODED_LIMIT || '100kb',
        parameterLimit: parseInt(process.env.URLENCODED_PARAM_LIMIT) || 100,
        type: process.env.URLENCODED_TYPE || "application/x-www-form-urlencoded",
        verify
    };

    console.log('[ URLENCODED OPTIONS ]', JSON.stringify(options));

    return options;
}

/**
 * Exports the function to generate options for parsing URL-encoded data.
 * @type {Object}
 */
module.exports = express.urlencoded(handlerOptions());
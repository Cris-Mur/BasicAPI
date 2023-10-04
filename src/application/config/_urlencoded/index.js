/**
 * Module for handling options related to parsing URL-encoded data.
 * @module UrlEncodedParsingOptions
 */
const express = require("express");
const boolean = require("../../../utils/parsers/boolean");

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
function factoryUrlencoded(verify = undefined) {
    if (!boolean.parse(process.env.URLENCODED)) {
        return undefined;
    }
    /**
     * The options for parsing URL-encoded data.
     * @type {UrlEncodedParsingOptions}
     */
    let options = {
        extended: boolean.parse(process.env.URLENCODED_EXTENDED) || true,
        inflate: boolean.parse(process.env.URLENCODED_INFLATE) || true,
        limit: process.env.URLENCODED_LIMIT || '100kb',
        parameterLimit: parseInt(process.env.URLENCODED_PARAM_LIMIT) || 100,
        type: process.env.URLENCODED_TYPE || "application/x-www-form-urlencoded",
        verify
    };

    console.debug('[ URLENCODED OPTIONS ]', JSON.stringify(options));

    return express.urlencoded(options);
}

/**
 * Exports the function to generate options for parsing URL-encoded data.
 * @type {Object}
 */
module.exports = factoryUrlencoded();

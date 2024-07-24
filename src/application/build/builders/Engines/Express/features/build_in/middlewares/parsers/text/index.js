/**
 * Module for handling options related to parsing text-based data.
 * @module TextParsingOptions
 */
const express = require("express");

const boolean = require('#Utils/boolean');

/**
 * Represents the options for parsing text-based data.
 * @typedef {Object} TextParsingOptions
 * @property {string} defaultCharset - The default character encoding for text data.
 * @property {boolean} inflate - Indicates if response data should be inflated.
 * @property {string} limit - The size limit for incoming text data.
 * @property {string} type - The expected content type of the incoming text data.
 * @property {Function} verify - A verification function for validating text data.
 */

/**
 * Generates options for parsing text-based data with customizable settings.
 * @param {Function} [verify=undefined] - An optional verification function.
 * @returns {TextParsingOptions} Options for parsing text-based data.
 */
function factoryText(verify = undefined) {
    if (!boolean(process.env.TEXT)) {
        return undefined;
    }
    /**
     * The options for parsing text-based data.
     * @type {TextParsingOptions}
     */
    const options = {
        defaultCharset: process.env.TEXT_CHARSET ?? "utf-8",
        inflate: boolean(process.env.JSON_INFLATE) ?? true,
        limit: process.env.TEXT_LIMIT ?? '100kb',
        type: process.env.TEXT_TYPE ?? "text/plain",
        verify
    };

    console.debug('[ TEXT OPTIONS ]', JSON.stringify(options));

    return express.text(options);
}

/**
 * Exports the function to generate options for parsing text-based data.
 * @type {Object}
 */
module.exports = factoryText();

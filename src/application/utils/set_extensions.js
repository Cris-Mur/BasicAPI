/**
 * Module for configuring and setting middleware extensions for an Express application.
 * @module MiddlewareConfiguration
 */

const { parseBoolean } = require("../config/utils/parse_boolean");
const express = require("express");
const { options } = require("../config");
const { handlePath } = require("../config/utils/handle_path");

/**
 * Sets middleware extensions based on configuration options.
 * @param {Object} application - The Express application instance.
 * @returns {Object} The modified Express application with middleware extensions.
 */
function setExtensions(application) {
    const possibleOptions = {
        json: parseBoolean(process.env.JSON)
            ? express.json(options._json.handlerOptions())
            : undefined,
        raw: parseBoolean(process.env.RAW)
            ? express.raw(options._raw.handlerOptions())
            : undefined,
        static: parseBoolean(process.env.STATIC)
            ? express.static(
                  handlePath(process.env.STATIC_DIR),
                  options._static.handlerOptions()
              )
            : undefined,
        text: parseBoolean(process.env.TEXT)
            ? express.text(options._text.handlerOptions())
            : undefined,
        urlencoded: parseBoolean(process.env.URLENCODED)
            ? express.urlencoded(options._urlencoded.handlerOptions())
            : undefined,
    };

    for (let setting in possibleOptions) {
        if (possibleOptions[setting] !== undefined) {
            console.log('[settings]', setting, possibleOptions[setting]);
            application.use(possibleOptions[setting]);
        }
    }

    return application;
}

/**
 * Exports the function for configuring and setting middleware extensions.
 * @type {Object}
 */
module.exports = {
    setExtensions
};

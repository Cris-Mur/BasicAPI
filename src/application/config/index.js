/**
 * Module for configuring and setting middleware extensions for an Express application.
 * @module MiddlewareConfiguration
*/

const logger = require('./utils/logger');
const { parseBoolean } = require("./utils/parse_boolean");
const express = require("express");
const { handlePath } = require("./utils/handle_path");
const { options } = require("./options");
const { locals } = require('./_locals');
/**
 * Sets middleware extensions based on configuration options.
 * @param {Object} application - The Express application instance.
 * @returns {Object} The modified Express application with middleware extensions.
 */
function setup(application) {
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


    if (parseBoolean(process.env.LOCAL_VARS))
        application.locals = locals

    return application;
}


module.exports = {
    logger,
    setup
};

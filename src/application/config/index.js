/**
 * Module for configuring and setting middleware extensions for an Express application.
 * @module MiddlewareConfiguration
*/
const boolean = require("../../utils/parsers/boolean");
const options = require("./options");
const { locals } = require('./_locals');

/**
 *  Sets middleware extensions based on configuration options.
 *  @param {Object} application - The Express application instance.
 *  @param {Object} settings - Express middleware object collection as key
 *      inner object
 * @returns {Object} The modified Express application with middleware extensions.
 */
function setup(application, settings=options) {
    const possibleOptions = settings;
    for (let setting in possibleOptions) {
        if (possibleOptions[setting] !== undefined) {
            console.debug('[settings]', setting, possibleOptions[setting]);
            application.use(possibleOptions[setting]);
        }
    }
    if (boolean.parse(process.env.LOCAL_VARS))
        application.locals = locals

    return application;
}

module.exports = {
    setup
};

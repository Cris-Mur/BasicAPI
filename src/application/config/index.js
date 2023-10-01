/**
 * Module for configuring and setting middleware extensions for an Express application.
 * @module MiddlewareConfiguration
*/
const options = require("./options");
const { locals } = require('./_locals');
const boolean = require("../utils/parsers/boolean");

/**
 * @todo
 * Keep uptated enviroment features
 */
const enviromentFeatures = [
    "json",
    "raw",
    "static",
    "text",
    "urlencoded"
];
const cannonnicalFeatures = {};
enviromentFeatures.forEach(feature => {
    let underscore = "_" + feature.toString();
    cannonnicalFeatures[feature] = options[underscore]
});

/**
 *  Sets middleware extensions based on configuration options.
 *  @param {Object} application - The Express application instance.
 *  @param {Object} settings - Express middleware object collection as key
 *      inner object
 * @returns {Object} The modified Express application with middleware extensions.
 */
function setup(application, settings=options) {
    const possibleOptions = settings;
    console.debug('[uwu]');
    for (let setting in possibleOptions) {
        if (possibleOptions[setting] !== undefined) {
            console.log('[settings]', setting, possibleOptions[setting]);
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

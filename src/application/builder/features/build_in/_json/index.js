const express = require("express");
const boolean = require('../../../../utils/parsers/boolean');
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
function factoryJson(reviver = null, verify = undefined) {
    if (!boolean.parse(process.env.JSON)) {
        return undefined;
    }
    const options = {
        inflate: boolean.parse(process.env.JSON_INFLATE) ?? true,
        limit: process.env.JSON_LIMIT ?? '100kb',
        strict: boolean.parse(process.env.JSON_STRICT) ?? true,
        type: process.env.JSON_TYPE ?? "application/json",
        reviver,
        verify
    }
    console.debug('[ JSON OPTIONS ]', JSON.stringify(options));
    return express.json(options);
}

module.exports = factoryJson();

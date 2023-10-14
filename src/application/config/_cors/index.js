const express = require("express");
const cors = require("cors");
const boolean = require('../../../utils/parsers/boolean');
const {port} = require('../../../network/utils');
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
    `http://localhost:${2700}`,
    `http://localhost:${2701}`,
    `http://localhost:${port}`
];
console.debug("[CORS Whitelist]", whitelist);
var options = {
    origin: function (origin, callback) {
        //console.debug("[Whitelist]", whitelist);
        console.debug("[Origin]", origin);
        // Server to Server Policy
        // origin = undefined
        if (serverToServerPolicy(origin)) {
            console.warn("[Server to Server Request]")
            const srv2srvError = new Error("Server to Server Policy Error");
            srv2srvError.applicationTypeError = "serverToServerPolicy"
            callback(srv2srvError);
        } else if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
/**
 * @function evaluate origin in request without origin header policy
 * return true if origin are undefined or fallse if origin exist or policy are
 * dissabled
 */
function serverToServerPolicy(origin) {
    console.debug("[ srv2srv ]", origin, boolean.parse(process.env.SRVTOSRV))
    if (origin == undefined && !boolean.parse(process.env.SRVTOSRV)) {
        return true;
    }
    return false;
}
module.exports = cors(options);

const cors = require("cors");
const boolean = require('../../../../utils/parsers/boolean');
const { port } = require('../../../../network/utils');


/**
 * @function serverToServerPolicy - evaluate origin in request without origin 
 * header policy return true if origin are undefined or fallse if origin 
 * exist or policy are dissabled.
*/
function serverToServerPolicy(origin) {
    const whitelist = [
        `http://localhost:${2700}`,
        `http://localhost:${2701}`,
        `http://localhost:${port}`
    ];
    // Server to Server Policy
    // origin = undefined
    console.debug("[ srv2srv ]", origin, boolean.parse(process.env.SRVTOSRV))
    if (boolean.parse(process.env.SRVTOSRV) && origin === undefined) {
        return true;
    }
    if (origin) {
        if (!whitelist.includes(origin)) {
            const CORS_Error = new Error('Not allowed by CORS');
            throw CORS_Error;
        }
        return true;
    } else {
        const srv2srvError = new Error("Origin Header are Required");
        srv2srvError.applicationTypeError = "serverToServerPolicy"
        throw srv2srvError;
    }
}
/**
 * @function factoryCors - Funtion to managge cors
 * @returns cors middleware | undefined
*/
function factoryCors() {
    /**
     * Returns an options object for JSON parsing with configurable settings.
     *
     * @param {Function|null} [reviver=null] - A function that transforms the results. (Optional)
     * @param {function} [verify=undefined] - An optional parameter for verification purposes. (Optional)
     * @returns {Object} | undefined
     */
    const options = {
        origin(origin, callback) {
            console.debug("[Origin]", origin);
            try {
                return callback(null, serverToServerPolicy(origin));
            } catch (error_) {
                console.warn("[CORS Policy]", error_);
                return callback(error_);
            }
        }
    }
    if (!boolean.parse(process.env.CORS)) {
        return undefined;
    }
    return cors(options);
}
module.exports = factoryCors();

const cors = require("cors");
const boolean = require('#Utils/boolean');
const  port  = require('#Network').port.getPort();

/**
 * @function serverToServerPolicy - evaluate origin in request without origin 
 * header policy return true if origin are undefined or fallse if origin 
 * exist or policy are dissabled.
*/
function serverToServerPolicy(origin) {
    const whitelist = [
        `http://127.0.0.1:${port}`,
        `http://localhost:${port}`
    ];
    // Server to Server Policy
    // origin = undefined
    if (boolean(process.env.SRVTOSRV) && origin === undefined) {
        return true;
    }
    if (origin) {
        if (!whitelist.includes(origin)) {
            console.debug(
                "[ CORS Policy ][ Origin on header ]", origin, "\n",
                "[Server to Server policy enabled ? ]",
                boolean(process.env.SRVTOSRV)
            )
            const CORS_Error = new Error('Not allowed by CORS');
            throw CORS_Error;
        }
        return true;
    } else {
        console.debug(
            "[ CORS Policy ][ Origin on header ]", origin, "\n",
            "[Server to Server policy enabled ? ]", boolean(process.env.SRVTOSRV))
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
    if (!boolean(process.env.CORS))
        return undefined;

    const options = {
        origin(origin, callback) {
            try {
                return callback(null, serverToServerPolicy(origin));
            } catch (error_) {
                console.warn("[CORS Policy]", error_.applicationTypeError);
                return callback(error_);
            }
        }
    }
    return cors(options);
}
module.exports = factoryCors();

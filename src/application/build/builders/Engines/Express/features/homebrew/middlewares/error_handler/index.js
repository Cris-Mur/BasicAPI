/**
 * Handles application-specific errors.
 *
 * @param {Error} error_ - The application-specific error object.
 * @param {Object} res - The response object.
 * @throws {Error} - Throws the error if it's not an application-specific error.
 */
function applicationErrors(error_, res) {
    if (!error_?.applicationTypeError) {
        throw error_;
    }

    const applicationErrors_ = {
        serverToServerPolicy: 503,
        WhitelistCORSPolicy: 500
    }

    res.status(
        applicationErrors_[error_.applicationTypeError]
    ).json(error_.message);
}
/**
 * Handles errors that occur during request processing.
 *
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {Promise<void>} - A Promise that resolves once the error is handled.
 */
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        next(err);
    }
    // Construct the URL from the request details
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    // Log the error along with the request details
    console.error(`[ Error on ][URL] ${url} [Method] ${req.method}`);
    console.warn("[ Error catched ]", err)

    try {
        // Attempt to handle application-specific errors
        applicationErrors(err, res);
    } catch (error_) {
        // Handle any errors that occur during application error handling
        res.status(500).send({
            message: "Error on request.",
            error: error_.message
        });
    }
}
/**
 * Exports the middleware for request inspection and performance measurement.
 * @type {Object}
 */
module.exports = {
    errorHandler
};

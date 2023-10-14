//const fs = require('node:fs/promises');

/**
 * Handles errors that occur during request processing.
 *
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {Promise<void>} - A Promise that resolves once the error is handled.
 */
async function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    // Construct the URL from the request details
    let url = req.protocol + '://' + req.get('host') + req.originalUrl;

    // Log the error along with the request details
    console.error(`[URL] ${url} [Method] ${req.method}` + '\n', err);

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

    const applicationErrors = {
        serverToServerPolicy: 503
    }

    res.status(applicationErrors[error_.applicationTypeError]).send(error_.message);
}

/**
 * Exports the middleware for request inspection and performance measurement.
 * @type {Object}
 */
module.exports = {
    errorHandler
};

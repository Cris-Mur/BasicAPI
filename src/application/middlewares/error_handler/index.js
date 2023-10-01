const fs = require('node:fs/promises');

async function errorHandler(err, req, res, next) {
    console.error('[URL]', req.protocol + '://' + req.get('host') + req.originalUrl + '\n', err);
    res.status(500).send("Error on request.");
}

/**
 * Exports the middleware for request inspection and performance measurement.
 * @type {Object}
 */
module.exports = {
    errorHandler
};

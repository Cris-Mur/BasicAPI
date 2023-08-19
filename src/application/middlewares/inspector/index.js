/**
 * Module for request inspection and performance measurement middleware.
 * @module RequestInspector
 */

const performance = require('./utils/performance');
const crypto = require('node:crypto');

/**
 * Middleware for inspecting incoming requests and measuring performance.
 * @param {Object} req - The incoming request object.
 * @param {Object} res - The outgoing response object.
 * @param {Function} next - The next middleware function in the chain.
 */
async function inspector(req, res, next) {
    console.log(`[${req.method}][${req.hostname}][${req.baseUrl}][${req.path}]`);
    req.id = crypto.randomBytes(16).toString('hex');
    console.log('[URL]', req.protocol + '://' + req.get('host') + req.originalUrl);
    req.performance = new performance();
    next();
}

/**
 * Exports the middleware for request inspection and performance measurement.
 * @type {Object}
 */
module.exports = {
    inspector
};

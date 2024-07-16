/**
 * Module for request inspection and performance measurement middleware.
 * @module RequestInspector
 */

const performance = require('#Utils/performance');
const crypto = require('node:crypto');

/**
 * Middleware for inspecting incoming requests and measuring performance.
 * @param {Object} req - The incoming request object.
 * @param {Object} res - The outgoing response object.
 * @param {Function} next - The next middleware function in the chain.
 */
function inspector(req, res, next) {
    req.id = crypto.randomBytes(16).toString('hex').toUpperCase();
    console.log(`[req ID ${req.id}][${req.method}][${req.hostname}][${req.path}]`);
    console.log('[URL]', `${req.protocol}://${req.get('host')}${req.originalUrl}`);
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

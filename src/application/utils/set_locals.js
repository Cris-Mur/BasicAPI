/**
 * Module for setting local variables on an Express application instance.
 * @module LocalVariablesSetter
 */

const { locals } = require('../config/_locals');

/**
 * Sets local variables on an Express application instance.
 * @param {Object} application - The Express application instance.
 */
function setLocals(application) {
    application.locals = locals;
}

/**
 * Exports the function for setting local variables on an Express application.
 * @type {Object}
 */
module.exports = {
    setLocals
};

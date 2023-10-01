/**
 * Module for creating and configuring an Express application instance.
 * @module ApplicationConfiguration
 */

const express = require('express');
require('./utils');
const { setup } = require('./config');
/**
 * Creates and configures an Express application instance.
 * @type {Object} application - The configured Express application instance.
 */
let application = express();
application = setup(application);
// Disable 'x-powered-by' header for security, if you know that is Express
// you know that's machine
application.disable('x-powered-by');
console.debug('[Locals]', application.locals);
/**
 * Exports the configured Express application instance.
 * @type {Object}
 */
module.exports = application;

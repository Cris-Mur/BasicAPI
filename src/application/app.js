/**
 * Module for creating and configuring an Express application instance.
 * @module ApplicationConfiguration
 */

const express = require('express');
const { setExtensions } = require('./utils/set_extensions');
const { setLocals } = require('./utils/set_locals');

/**
 * Creates and configures an Express application instance.
 * @type {Object} application - The configured Express application instance.
 */
const application = setExtensions(express());

// Disable 'x-powered-by' header for security best practices
application.disable('x-powered-by');

// Set local variables on the application
setLocals(application);

/**
 * Exports the configured Express application instance.
 * @type {Object}
 */
module.exports = application;

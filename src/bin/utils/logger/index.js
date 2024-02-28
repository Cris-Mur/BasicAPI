/**
 * @module logger
 * Module to customize build-in console functions.
 * @license MIT
 * @author Cris-Mur
 */
const { boolean } = require('./utils/parse');
const tag = require('./tag');
const util = require('node:util');

/**
 * Overrides the default `console.log`.
 * @param {...any} args - Arguments to be logged.
 */
const raw_log = console.log;
console.log = function logger(...args) {
    const level = "log";
    const prefix = tag(level);
    raw_log(prefix, applyFormat(...args));
}

/**
 * Overrides the default `console.error`.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_error = console.error;
console.error = function logger_error(...args) {
    const level = "error";
    const prefix = tag(level);
    raw_error(prefix, applyFormat(...args));
}

/**
 * Overrides the default `console.debug`.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_debug = console.debug;
console.debug = function logger_debug(...args) {
    if (!boolean(process.env.VERBOSE))
        return;
    const level = "debug";
    const prefix = tag(level);
    raw_debug(prefix, applyFormat(...args));
}

/**
 * Overrides the default `console.warn`.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_warn = console.warn;
console.warn = function logger_warn(...args) {
    if (!boolean(process.env.VERBOSE))
        return;
    const level = "warning";
    const prefix = tag(level);
    raw_warn(prefix, applyFormat(...args));
}

/**
 * @function applyFormat - Function to manage format of input using core fn.
 * @param  {...any} args - Input of console
 * @returns {util.formatWithOptions}
 */
function applyFormat(...args) {
    const formatOptions = {
        colors: true
    }
    return util.formatWithOptions(formatOptions, ...args);
}

/**
 * Exports the customized console with environment-aware logging and error handling.
 * @type {Object}
 */
module.exports = console;

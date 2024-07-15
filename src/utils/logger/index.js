/**
 * @module logger
 * Module to customize build-in console functions improoving loging features.
 * @license MIT
 * @author Cris-Mur
 */
const boolean = require('#Utils/boolean');
const tag = require('./tag');
const util = require('node:util');

const raw_log = console.log;
/**
 * @function logger
 * @description - Overrides the default `console.log` with custom format.
 * @param {...any} args - Arguments to be logged.
 */
function logger(...args) {
    const level = "log";
    const prefix = tag(level);
    raw_log(prefix + applyFormat(...args));
}
console.log = logger;

// ---

const raw_error = console.error;
/**
 * @function logger_error
 * @description - Overrides the default `console.error`.
 * @param {...any} args - Arguments to be logged as errors.
 */
function logger_error(...args) {
    const level = "error";
    const prefix = tag(level);
    raw_error(prefix + applyFormat(...args));
}
console.error = logger_error;

// --

const raw_debug = console.debug;
/**
 * @function logger_debug
 * @description - Overrides the default `console.debug`.
 * @param {...any} args - Arguments to be logged as errors.
 */
function logger_debug(...args) {
    if (!boolean(process.env.VERBOSE))
        return;
    const level = "debug";
    const prefix = tag(level);
    raw_debug(prefix + applyFormat(...args));
}

console.debug = logger_debug;

// ---

const raw_warn = console.warn;
/**
 * @function logger_warn
 * @description - Overrides the default `console.warn`.
 * @param {...any} args - Arguments to be logged as errors.
 */
function logger_warn(...args) {
    if (!boolean(process.env.VERBOSE))
        return;
    const level = "warning";
    const prefix = tag(level);
    raw_warn(prefix + applyFormat(...args));
}

console.warn = logger_warn;

// ---

/**
 * @function applyFormat
 * @description - Function to handle format of input using core fn.
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
 * @namespace console
 */
module.exports = console;

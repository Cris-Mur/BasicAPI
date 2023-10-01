/**
 * Module for customizing console logging and error handling based on the environment.
 * @module CustomConsole
 */
const boolean = require('../parsers/boolean');
const tag = require('./tag');
const util = require('node:util');

function applyFormat(...args) {
    let formatOptions = {
        colors: true
    }
    let result = util.formatWithOptions(formatOptions, ...args);
    return result;
 }
/**
 * Overrides the default `console.log`.
 * @param {...any} args - Arguments to be logged.
 */
const raw_log = console.log;
console.log = function logger(...args) {
    let level="log";
    let prefix = tag.newTag(level);
    let result = raw_log(prefix, applyFormat(...args));
}

/**
 * Overrides the default `console.error`.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_error = console.error;
console.error = function logger_error(...args) {
    let level="error";
    let prefix = tag.newTag(level);
    let result = raw_error(prefix, applyFormat(...args));
}

/**
 * Overrides the default `console.debug`.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_debug = console.debug;
console.debug = async function logger_debug(...args) {
    if (!boolean.parse(process.env.VERBOSE))
        return;
    let level="debug";
    let prefix = tag.newTag(level);
    let result = raw_debug(prefix, applyFormat(...args));
}

/**
 * Overrides the default `console.warn`.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_warn = console.warn;
console.warn = async function logger_warn(...args) {
    if (!boolean.parse(process.env.VERBOSE))
        return;
    let level="warning";
    let prefix = tag.newTag(level);
    let result = raw_warn(prefix, applyFormat(...args));
}

/**
 * Exports the customized console with environment-aware logging and error handling.
 * @type {Object}
 */
module.exports = console;

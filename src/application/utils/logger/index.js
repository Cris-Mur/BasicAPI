/**
 * Module for customizing console logging and error handling based on the environment.
 * @module CustomConsole
 */
const boolean = require('../parsers/boolean');
const util = require('node:util');

function env() {
    let env = process.env.NODE_ENV;
    return `[ ${env} ]`;
}


/**
 * @param {String} inputString - 
 * @param {number} size - 
 */
function centerString(inputString, size=3) {
    if (typeof inputString !== "string")
        throw new Error("inputString must be a String");
    if (size < 3)
        return "...";
    if (size <= inputString.length) {
        return inputString.slice();
    }
    const padding = Math.round(size * 0.8);
    if (padding < 1) 
    let subStr = inputString.slice(0, padding - 3);

    return result;
}

const tag = `[ logger ]`;
function loggerTag(level) {
    level = `[\t${level}\t]\t`
    let date = `[ ${new Date().toISOString()} ]`;
    let result = tag;
    result = result.concat(env(), date, level);
    return result;
}

/**
 * Overrides the default `console.log`.
 * @param {...any} args - Arguments to be logged.
 */
const raw_log = console.log;
console.log = function logger(...args) {
    let level="log";
    let prefix = loggerTag(level);
    let formatOptions = {
        colors: true
    }
    let formatInput = util.formatWithOptions(formatOptions, ...args);
    let result = raw_log(prefix, formatInput);
}

/**
 * Overrides the default `console.error`.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_error = console.error;
console.error = function logger_error(...args) {
    let level="error";
    let prefix = loggerTag(level);
    let result = raw_error(prefix, ...args);
}

/**
 * Overrides the default `console.debug`.
 * @param {...any} args - Arguments to be logged as errors.
 */
console.time("debug");
const raw_debug = console.debug;
console.debug = async function logger_debug(...args) {
    if (!boolean.parse(process.env.VERBOSE))
        return;
    let level="debug";
    let prefix = loggerTag(level);
    let result = raw_debug(prefix, ...args);
    console.timeLog("debug");
}

/**
 * Overrides the default `console.warn`.
 * @param {...any} args - Arguments to be logged as errors.
 */
console.time("warn");
const raw_warn = console.warn;
console.warn = async function logger_warn(...args) {
    if (!boolean.parse(process.env.VERBOSE))
        return;
    let level="warning";
    let prefix = loggerTag(level);
    let result = raw_warn(prefix, ...args);
    console.timeLog("warn");
}

/**
 * Exports the customized console with environment-aware logging and error handling.
 * @type {Object}
 */
module.exports = console;

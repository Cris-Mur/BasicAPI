/**
 * Module for customizing console logging and error handling based on the environment.
 * @module CustomConsole
 */

/**
 * Overrides the default `console.log` behavior based on the environment.
 * @param {...any} args - Arguments to be logged.
 */
const raw_log = console.log;

console.log = function (...args) {
    let env = process.env.NODE_ENV;
    let prefix = '';
    switch (env) {
        case 'production':
            prefix += `[${new Date().toISOString()}]`;
            raw_log(prefix, ...args);
            return;
        case 'development':
            prefix += `[dev][${new Date().toISOString()}]`;
            raw_log(prefix, ...args);
            return;
        default:
            raw_log(...args);
    }
};

/**
 * Overrides the default `console.error` behavior based on the environment.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_error = console.error;

console.error = function (...args) {
    let env = process.env.NODE_ENV;
    let prefix = '';
    switch (env) {
        case 'production':
            prefix += `[${new Date().toISOString()}][ERROR]\n`;
            raw_error(prefix, ...args);
            return;
        case 'development':
            prefix += `[development][${new Date().toISOString()}][ERROR]\n`;
            raw_error(prefix, ...args);
            return;
        default:
            raw_error(...args);
    }
};

/**
 * Exports the customized console with environment-aware logging and error handling.
 * @type {Object}
 */
module.exports = console;

/**
 * Module for customizing console logging and error handling based on the environment.
 * @module CustomConsole
 */

const tag = `[logger]`;

function env() {
    let env = process.env.NODE_ENV;
    return `[${env}]`;
}

/**
 * Overrides the default `console.log` behavior based on the environment.
 * @param {...any} args - Arguments to be logged.
 */
const raw_log = console.log;
console.log = function logger(...args) {
    let level="log";
    let prefix = tag.slice();
    prefix = prefix.concat(`[${level}]`);
    prefix = prefix.concat(env());
    let result = raw_log(prefix, ...args);
}
/**
 * Overrides the default `console.error` behavior based on the environment.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_error = console.error;
console.error = function logger_error(...args) {
    let level="error"
    /**
     * {String} - prefix
     */
    let prefix = tag.slice();
    prefix = prefix.concat(`[${level}]`);
    prefix = prefix.concat(env());
    let result = raw_error(prefix, ...args);
};
/**
 * Overrides the default `console.error` behavior based on the environment.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_debug = console.debug;

console.debug = async function logger_debug(...args) {
    let level="debug"
    let prefix = tag.slice();
    prefix = prefix.concat(`[${level}]`);
    prefix = prefix.concat(env());
    let result = raw_debug(prefix, ...args);
};

/**
 * Exports the customized console with environment-aware logging and error handling.
 * @type {Object}
 */
module.exports = console;

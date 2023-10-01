/**
 * Module for customizing console logging and error handling based on the environment.
 * @module CustomConsole
 */

/**
 * Overrides the default `console.log` behavior based on the environment.
 * @param {...any} args - Arguments to be logged.
 */
const raw_log = console.log;
console.log = function logger(...args) {
    let env = process.env.NODE_ENV;
    let level=""
    let prefix = `[${new Date().toISOString()}][${level}]`;
    switch (env) {
        case 'production':
            prefix += ``;
            raw_log(prefix, ...args);
            return;
        case 'development':
            prefix += `[${env}]`;
            raw_log(prefix, ...args);
            return;
        case 'debug':
            prefix += `[${env}]`;
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
console.error = function logger_error(...args) {
    let env = process.env.NODE_ENV;
    let level="error"
    let prefix = `[${new Date().toISOString()}][${level}]`;
    switch (env) {
        case 'production':
            prefix += ``;
            raw_error(prefix, ...args);
            break;
        case 'development':
            prefix += `[${env}]`;
            raw_error(prefix, ...args);
            break;
        case 'debug':
            prefix += `[${env}]`;
            raw_error(prefix, ...args);
            break;
        default:
            raw_error(prefix, ...args);
    }
    if (true) {
        error_file = process.env.ERROR_FOLDER + `${"error_nodeapp.log"}`;
        strToFile(prefix + args.toString() + '\n', debug_file);
    }
 
    if (true) {
        debug_file = process.env.DEBUG_FOLDER + `${"nodeapp.log"}`;
        strToFile(prefix + args.toString() + '\n', debug_file);
    }
 
};
/**
 * Overrides the default `console.error` behavior based on the environment.
 * @param {...any} args - Arguments to be logged as errors.
 */
const raw_debug = console.debug;

console.debug = async function logger_debug(...args) {
    let env = process.env.NODE_ENV;
    let level="debug"
    let prefix = `[${new Date().toISOString()}][${level}]`;
    switch (env) {
        case 'production':
            prefix += ``;
            raw_debug(prefix, ...args);
            break;
        case 'development':
            prefix += `[${env}]`;
            raw_debug(prefix, ...args);
            break;
        case 'debug':
            prefix += `[${env}]`;
            raw_debug(prefix, ...args);
            break;
        default:
            raw_debug(...args);
    }
    if (true) {
        debug_file = process.env.DEBUG_FOLDER + `${"nodeapp.log"}`;
        strToFile(prefix + args.toString() + '\n', debug_file);
    }
    return;
};

const fs = require('node:fs/promises');
async function strToFile(string, file) {
    try {
        console.log('inserting entry to debu file: ', file);
        await fs.access(file, fs.constants.R_OK | fs.constants.W_OK);
    } catch (error_) {
        if (error_.code == 'ENOENT') {
            await fs.writeFile(file, string);
            return true;
        }
        console.error(error_);
        console.error('cannot insert entry to debug file.');
        return false;
    }
    await fs.appendFile(file, string);
    return true;
}

/**
 * Exports the customized console with environment-aware logging and error handling.
 * @type {Object}
 */
module.exports = console;

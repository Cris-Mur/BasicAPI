/**
 * Module for customizing console logging and error handling based on the environment.
 * @module CustomConsole
 */
const path = require('node:path');
const fs = require('node:fs/promises');
const boolean = require('../parsers/boolean');

global.logger = boolean.parse(process.env.LOGGER);

const init = require('./init');
const tag = `[logger]`;

function env() {
    let env = process.env.NODE_ENV;
    return `[${env}]`;
}
let auxLoggerPath = "";
(async () => {
    auxLoggerPath = await init.initLogger();
})();
const loggerPath = auxLoggerPath.slice();

async function fileStrategy(level, message) {
    if (!logger) {
        return true;
    }
    message = message.slice().concat('\n');
    const prefixLevel = {
        "log": ".log",
        "error": ".log.error",
        "debug": ".log"
    }
    let file = await loggerPath + prefixLevel[level];
    strToFile(message, file);
}

async function strToFile(string, file) {
    try {
        console.log('append log to file:', file);
        console.log('append log:', string);
        await fs.access(file, fs.constants.R_OK | fs.constants.W_OK);
        await fs.appendFile(file, string);
        return true;
    } catch (error_) {
        if (error_.code == 'ENOENT') {
            await fs.writeFile(file, string);
            return true;
        }
        console.error(error_);
        console.error('cannot insert entry to debug file.');
        return false;
    }
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
    let message = prefix.slice().concat(args.toString());
    fileStrategy(level, message)
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
    let message = prefix.concat(" ", args.toString());
    fileStrategy(level, message);
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
    let message = prefix.concat(" ", args.toString());
    fileStrategy(level, message);
};

/**
 * Exports the customized console with environment-aware logging and error handling.
 * @type {Object}
 */
module.exports = console;

/**
 * @module logger.tag
 * @description - Module to customize tag in console.
 * @license MIT
 * @author Cris-Mur
 */

const os = require('node:os');
const boolean = require('#Utils/boolean');

// Available terminal Colors
/**
 * Unused Escape colors
 * const GREEN_TEXT = '\x1b[32m';
 * const YELLOW_TEXT = '\x1b[33m';
 * const RED_TEXT = '\x1b[31m';
 * const BLUE_TEXT = '\x1b[94m';
 * const WHITE_TEXT = '\x1b[37m';
 * const WHITE_BG = '\x1b[47m';
 * const BLACK_BG = '\x1b[40m';
 */

const GREEN_BG = '\x1b[42m';
const YELLOW_BG = '\x1b[43m';
const RED_BG = '\x1b[41m';
const BLUE_BG = '\x1b[104m';
const BLACK_TEXT = '\x1b[30m';
const RESET = '\x1b[0m';

// ## Getter functions

/**
 * @function getNodeEnvironment
 * @description This function returns the node environment set in NODE_ENV.
 * @returns {String} Environment.
 */
function getNodeEnvironment() {
    return process.env.NODE_ENV ?? "development";
}

/**
 * @function getEnvTag
 * @description This function returns a string tag of the environment.
 * @returns {String} `[ ${env} ]`
 */
function getEnvTag() {
    return `[ ${centerString(getNodeEnvironment(), 11)} ]`;
}

/**
 * @function getHost
 * @description Get the machine hostname.
 * @returns {String} Hostname.
 */
function getHost() {
    return os.hostname();
}

/**
 * @function getHostTag
 * @description Get the formatted hostname tag.
 * @returns {String} Formatted hostname tag.
 */
function getHostTag() {
    return `[ ${centerString(getHost(), getHost().length)} ]`;
}

/**
 * @function getDate
 * @description Get the date in ISO format.
 * @returns {String} Date in ISO format.
 */
function getDate() {
    return new Date().toISOString();
}

/**
 * @function getDateTag
 * @description Get the formatted date tag.
 * @returns {String} Formatted date tag.
 */
function getDateTag() {
    const date = getDate();
    return `[ ${centerString(date, date.length)} ]`;
}

/**
 * @function getLevelTag
 * @description Get the formatted level tag.
 * @param {String} level - Log level.
 * @returns {String} Formatted level tag.
 */
function getLevelTag(level) {
    if (!level) return '';
    const level_tag = level;
    const levelPadding = 9;
    let tag = centerString(level, levelPadding);
    tag = `[${colorizeLevel(level_tag, tag)}] `;
    return tag;
}

/**
 * @function getTag
 * @description Generates a pretty tag to print in console.
 * @param {String} level - Log level.
 * @returns {String} Generated tag.
 */
function getTag(level) {
    if (!boolean(process.env.LOGGER)) return '';
    return ''.concat(
        getHostTag(),
        getEnvTag(),
        getDateTag(),
        getLevelTag(level),
        "\n"
    );
}

// ## Format functions

/**
 * @function centerString
 * @description This function centers a string in a space.
 * @param {String} inputString - The string to center.
 * @param {Number} totalSpaces - The total spaces to center within.
 * @returns {String} Centered spaced string.
 */
function centerString(inputString, totalSpaces) {
    if (!inputString) return '';

    if (totalSpaces < inputString.length) {
        inputString = `${inputString.substring(0, totalSpaces - 3)}...`;
    }

    const padding = Math.max(0, totalSpaces - inputString.length);
    const leftPadding = Math.floor(padding / 2);
    const rightPadding = Math.ceil(padding / 2);

    return ' '.repeat(leftPadding) + inputString + ' '.repeat(rightPadding);
}

/**
 * @function colorizeLevel
 * @description This function adds color to a string using the level tag.
 * @param {String} level - Log level.
 * @param {String} input - The string to colorize.
 * @returns {String} Colorized string.
 */
function colorizeLevel(level, input) {
    if (!boolean(process.env.COLORED) || !level) {
        return input;
    }
    const color = {
        log: {
            start: `${BLUE_BG}${BLACK_TEXT}`,
            end: `${RESET}`
        },
        error: {
            start: `${RED_BG}`,
            end: `${RESET}`
        },
        warning: {
            start: `${YELLOW_BG}${BLACK_TEXT}`,
            end: `${RESET}`
        },
        debug: {
            start: `${GREEN_BG}${BLACK_TEXT}`,
            end: `${RESET}`
        }
    };

    return color[level].start + input + color[level].end;
}

module.exports = getTag;
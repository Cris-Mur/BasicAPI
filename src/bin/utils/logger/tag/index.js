const os = require('node:os');
const { boolean } = require('../utils/parse');

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
 * @description This function retunrn a node environment setted in NODE_ENV
 * @returns {String} environment.
 */
function getNodeEnvironment() {
    return process.env.NODE_ENV ?? "development";
}

/**
 * @function getEnvTag
 * this function returns a string tag of environment
 * @returns {String} `[ ${env} ]`
 */
function getEnvTag() {
    return `[ ${centerString(getNodeEnvironment(), 11)} ]`;
}

/**
 * get Machine hostname
 * @returns {String}
 */
function getHost() {
    return os.hostname;
}

/**
 * get formated hostname tag
 * @returns {String}
 */
function getHostTag() {
    return `[ ${centerString(getHost(), getHost().length)} ]`;
}

/**
 * Get Date in isoformat
 * @returns {String}
 */
function getDate() {
    return new Date().toISOString();
}

/**
 * Get formated date tag
 * @returns {String}
 */
function getDateTag() {
    let date = getDate();
    return `[ ${centerString(date, date.length)} ]`;
}

/**
 * Get formated level tag
 * @param {String} level 
 * @returns {String}
 */
function getLevelTag(level) {
    if (!level)
        return '';
    const level_tag = level;
    let levelPadding = 9;
    let tag = centerString(level, levelPadding)
    tag = `[${colorizeLevel(level_tag, tag)}] `
    return tag;
}

/**
 * @function newTag - generates a pretty tag to prints in console
 * @param {String} level 
 * @returns {String}
 */
function getTag(level) {
    //logger enable?
    if (!boolean(process.env.LOGGER))
        return '';
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
 * this function centered a string in a space.
 * @param {String} inputString 
 * @param {Number} totalSpaces 
 * @returns {String} centered spaced string
 */
function centerString(inputString, totalSpaces) {

    if (!inputString)
        return '';

    if (totalSpaces < inputString.length) {
        inputString = `${inputString.substring(0, totalSpaces - 3)}...`;
    }

    const padding = Math.max(0, totalSpaces - inputString.length);
    const leftPadding = Math.floor(padding / 2);
    const rightPadding = Math.ceil(padding / 2);

    return ' '.repeat(leftPadding) + inputString + ' '.repeat(rightPadding);
}

/**
 * @function levelColor - This function adds color into string using level tag.
 * @param {String} level 
 * @param {String} input 
 * @returns 
 */
function colorizeLevel(level, input) {
    if (!boolean(process.env.COLORED) || !level) {
        return input
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
    }

    return color[level].start + input + color[level].end;
}

module.exports = getTag;

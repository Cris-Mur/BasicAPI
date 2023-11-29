const os = require('node:os');
const boolean = require('../../parsers/boolean');

/**
 * @function env
 * @description This function retunrn a application environment
 * @returns {String} formated string to print in a logger tag.
 */
function env() {
    const environment = process.env.NODE_ENV || "production";
    return `[ ${centerString(environment, 11)} ]`;
}

/**
 * @param {String} inputString - 
 * @param {number} size - 
 */
function centerString(inputString, totalSpaces) {
    if (inputString.length > totalSpaces) {
        inputString = `${inputString.substring(0, totalSpaces - 3)}...`;
    }

    const padding = Math.max(0, totalSpaces - inputString.length);
    const leftPadding = Math.floor(padding / 2);
    const rightPadding = Math.ceil(padding / 2);

    return ' '.repeat(leftPadding) + inputString + ' '.repeat(rightPadding);
}

//const GREEN_TEXT = '\x1b[32m';
const GREEN_BG = '\x1b[42m';
//const YELLOW_TEXT = '\x1b[33m';
const YELLOW_BG = '\x1b[43m';
//const RED_TEXT = '\x1b[31m';
const RED_BG = '\x1b[41m';
//const BLUE_TEXT = '\x1b[94m';
const BLUE_BG = '\x1b[104m';
//const WHITE_TEXT = '\x1b[37m';
//const WHITE_BG = '\x1b[47m';
const BLACK_TEXT = '\x1b[30m';
//const BLACK_BG = '\x1b[40m';
const RESET = '\x1b[0m';


/**
 * @function levelColor - This function adds color into string using level tag.
 * @param {String} level 
 * @param {String} input 
 * @returns 
 */
function levelColor(level, input) {
    if (!boolean.parse(process.env.COLORED)) {
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
        },
    }

    return color[level].start + input + color[level].end;
}

const tag = `[ ${centerString(os.hostname, os.hostname.length)} ]`;

/**
 * @function newTag - generates a pretty tag to prints in screen
 * @param {String} level 
 * @returns {String}
 */
function newTag(level) {
    const date = `[ ${centerString(new Date().toISOString(), 24)} ]`;
    let result = tag;
    const level_tag = level;
    level = centerString(level, 9)
    level = `[${levelColor(level_tag, level)}] `
    result = result.concat(env(), date, level);
    return result;
}

module.exports = {
    newTag
};

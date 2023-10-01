const os = require('node:os');

/**
 * @function env
 * @description This function retunrn a application environment
 * @returns {String} formated string to print in a logger tag.
 */
function env() {
    let env = process.env.NODE_ENV;
    return `[ ${centerString(env, 11)} ]`;
}

/**
 * @function isPrime
 * @description This function evaluate if input number is prime.
 * @returns {Boolean}
 */
function isPrime (num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
/**
 * @param {String} inputString - 
 * @param {number} size - 
 */
function centerString(inputString, totalSpaces) {
    if (inputString.length > totalSpaces) {
        inputString = inputString.substring(0, totalSpaces - 3) + '...';
    }

    const padding = Math.max(0, totalSpaces - inputString.length);
    const leftPadding = Math.floor(padding / 2);
    const rightPadding = Math.ceil(padding / 2);

    return ' '.repeat(leftPadding) + inputString + ' '.repeat(rightPadding);
}

const tag = `[ ${centerString(os.hostname, os.hostname.length)} ]`;
function newTag(level) {
    let date = `[ ${centerString(new Date().toISOString(), 24)} ]`;
    let result = tag;
    level = `[${centerString(level, 9)}] `
    result = result.concat(env(), date, level);
    return result;
}

module.exports = {
    newTag
};

/**
 * @module parseBoolean
 * Top level function to parse boolean text input
 * @license MIT
 * @author Cris-Mur
 */

/**
 * Parses a string value to a boolean using typical regex.
 * @param {string} input - The string value to be parsed.
 * @returns {boolean} The parsed boolean value.
 */
function parseBoolean(input) {
    // Regex match `true` `True` `tRUe`
    // The string must be a true in text in onther case return false.
    const rex = /true/i;
    return rex.test(input);
}

module.exports = parseBoolean;

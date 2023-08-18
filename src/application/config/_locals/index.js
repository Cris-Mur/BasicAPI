/**
 * Module for handling local variables and environment settings.
 * @module LocalVariables
 */

const { process_params } = require("express/lib/router");

/**
 * Represents the local variables object.
 * @typedef {Object} LocalsObject
 * @property {Object} locals - A collection of local variables.
 */

console.log('[Loading locals]');

/**
 * The object that stores local variables.
 * @type {LocalsObject}
 */
let locals_ojb = {};

/**
 * Handles a local variable and extracts its value from the environment settings.
 * @param {string} key - The key of the environment variable.
 * @returns {Object} An object containing the extracted local variable value.
 */
function handleLocalVar(key) {
    let result = {};
    const rex = /locals/i;
    let split_name = key.split('LOCALS_')[1];
    let raw_value = process.env[key];
    if (rex.test(raw_value)) {
        raw_value = raw_value.split('LOCALS_')[1];
    }
    result[split_name] = raw_value;
    return result;
}

/**
 * Splits a semicolon-separated list of local variable assignments into an object.
 * @param {string} locals - A string containing semicolon-separated local variable assignments.
 * @returns {Object} An object with parsed local variables.
 */
function splitLocals(locals) {
    if (!locals) {
        return {};
    }
    let local_ = {};
    let splited_locals = locals.split(';');
    for (let local of splited_locals) {
        let [key, value] = local.split(':');
        if (key.length > 1 && value.length > 1) {
            local_[key] = value;
        }
    }
    return local_;
}

// Populate locals object with environment variables
Object.keys(process.env).forEach((env_var) => {
    locals_ojb = { ...handleLocalVar(env_var) };
});

// Populate locals object with additional parsed local variables
locals_ojb = {
    ...locals_ojb,
    ...splitLocals(process.env['LOCALS'])
};

console.log('[obj]', locals_ojb);

/**
 * Exports the locals object containing all local variables.
 * @type {LocalsObject}
 */
module.exports = {
    locals: locals_ojb
};

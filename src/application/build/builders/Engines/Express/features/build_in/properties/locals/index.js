/**
 * Module for handling local variables and environment settings.
 * @module LocalVariables
 */
/**
 * Represents the local variables object.
 * @typedef {Object} LocalsObject
 * @property {Object} locals - A collection of local variables.
 */
/**
 * Handles a local variable and extracts its value from the environment settings.
 * @param {string} key - The key of the environment variable.
 * @returns {Object} An object containing the extracted local variable value.
 */
function handleLocalVar(key) {
    const result = {};
    const rex = /locals_/i;
    let split_name = ''
    if (rex.test(key)) {
        let raw_value = process.env[key];
        split_name = key.replace(rex, '');
        raw_value = raw_value.replace(rex, '');
        result[split_name] = raw_value;
    }
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
    const local_ = {};
    const splited_locals = locals.split(';');
    for (const local of splited_locals) {
        const [key, value] = local.split(':');
        if (key.length > 1 && value.length > 1) {
            local_[key] = value;
        }
    }
    return local_;
}

function getLocalsInEnvironment() {
    const envLocals = Object.
        keys(process.env).
        filter((key) => { 
            return /locals_/i.test(key)
        });
    return envLocals
}

function handleVars() {
    const keysInEnvironment = getLocalsInEnvironment();
    const localsVar = splitLocals(process.env.LOCALS);
    let result = {};
    for (const variable of keysInEnvironment) {
        const local = handleLocalVar(variable)
        result = {...local, ...result};
    }
    return {...localsVar, ...result};
}

module.exports = handleVars();

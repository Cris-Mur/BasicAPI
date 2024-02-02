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
    let split_name = '', raw_value = process.env[key];
    if (rex.test(key)) {
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

/**
 * The object that stores local variables.
 * @type {LocalsObject}
 */
let LocalsObject = {
    ...splitLocals(process.env.LOCALS) // variables named with "locals" key word
};
// Populate locals object with environment variables
Object.keys(process.env).forEach((env_var) => {
    /**
     * Filter environment variables for local variables and update the LocalsObject.
     */
    if (/locals/i.test(env_var)) {
        const aux = handleLocalVar(env_var);
        LocalsObject = {...aux, ...LocalsObject};
    }
});
/**
 * Exports the locals object containing all local variables.
 * @type {LocalsObject}
 */
module.exports = {
    locals: LocalsObject
};

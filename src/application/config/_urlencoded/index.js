const {parseBoolean} = require("../utils/parse_boolean");

function handlerOptions(verify=undefined) {
    let options = {
        extended: parseBoolean(process.env.URLENCODED_EXTENDED) || true,
        inflate: parseBoolean(process.env.URLENCODED_INFLATE) || true,
        limit: process.env.URLENCODED_LIMIT || '100kb',
        parameterLimit: parseInt(process.env.URLENCODED_PARAM_LIMIT) || 100,
        type: process.env.URLENCODED_TYPE || "application/x-www-form-urlencoded",
        verify
    }
    console.log('[ URLENCODED OPTIONS ]', JSON.stringify(options));
    return options;
}

module.exports = {
    handlerOptions
};
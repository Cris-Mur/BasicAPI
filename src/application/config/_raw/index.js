const {parseBoolean} = require('../utils/parse_boolean');

function handlerOptions(verify=undefined) {
    let options = {
        inflate: parseBoolean(process.env.RAW_INFLATE) || true,
        limit: process.env.RAW_LIMIT || '100kb',
        type: process.env.RAW_TYPE || "application/octet-stream",
        verify
    }
    console.log('[ RAW OPTIONS ]', JSON.stringify(options));
    return options;
}

module.exports = {
    handlerOptions
};
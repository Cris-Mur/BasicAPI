const { parseBoolean } = require('../utils/parse_boolean');

function handlerOptions(verify=undefined) {
    let options = {
        defaultCharset: process.env.TEXT_CHARSET || "utf-8",
        inflate: parseBoolean(process.env.JSON_INFLATE) || true,
        limit: process.env.TEXT_LIMIT || '100kb',
        type: process.env.TEXT_TYPE || "text/plain",
        verify
    }
    console.log('[ TEXT OPTIONS ]', JSON.stringify(options));
    return options;
}

module.exports = {
    handlerOptions
};
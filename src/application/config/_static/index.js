const { parseBoolean } = require('../utils/parse_boolean');
const { splitCsv } = require('../utils/split_csv');
const { handlePath } = require('../utils/handle_path');

function handlerOptions(setHeaders=undefined) {
    let options = {
        dotfiles: process.env.STATIC_DOTFILES || 'ignore',//allow, deny, ignore
        etag: parseBoolean(process.env.STATIC_ETAG) || true,
        extensions: splitCsv(process.env.STATIC_EXTENSIONS) || false,
        fallthrough: parseBoolean(process.env.STATIC_FALLTHROUGH) || true,
        immutable: parseBoolean(process.env.STATIC_IMMUTABLE) || false,
        index: handlePath(process.env.STATIC_INDEX) || undefined,
        lastModified: parseBoolean(process.env.STATIC_LASTMODIFIED) || true,
        maxAge: parseInt(process.env.STATIC_MAXAGE) || 0,
        redirect: parseBoolean(process.env.STATIC_REDIRECT) || true,
        setHeaders
    }
    console.log('[ STATIC OPTIONS ]', JSON.stringify(options));
    return options;
}

module.exports = {
    handlerOptions
};
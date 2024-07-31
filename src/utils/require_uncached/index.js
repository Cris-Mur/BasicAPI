const path = require("node:path");

function requireUncached(filePath, dirname=__dirname) {
    const module = path.join(dirname, filePath);
    console.warn(`[Loading Module cleaning CACHE]\n${module}`)
    
    delete require.cache[require.resolve(module)];
    return require(module);
}

module.exports = requireUncached
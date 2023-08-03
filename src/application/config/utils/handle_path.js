const path = require('node:path');
function handlePath(input, verbose=false) {
    try {
        console.log('[normalize path]', input.length > 1? input:'<void>');
        return path.normalize(input);
    } catch (_error) {
        if (verbose) {
            console.error('[Error handling path ]', input, _error);
        } else
            console.error('[Error handling path]', input, _error.message);
        return path.normalize('./');
    }
}

module.exports = {
    handlePath
};
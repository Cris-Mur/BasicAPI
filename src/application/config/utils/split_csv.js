function splitCsv(input, separator=',', verbose=false) {
    try {
        if (typeof input !== 'string')
            throw new Error('input must be string');

        if (input.length < 1)
            return [];
        return input.split(separator);
    } catch (_error) {
        if (verbose) {
            console.error('[Error at splitting string]', _error)
        } else {
            console.error('[Error at splitting string]', _error.message);
        }
        return undefined;
    }
}

module.exports = {
    splitCsv
};
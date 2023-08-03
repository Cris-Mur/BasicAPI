const logger = require('./utils/logger');
const _json = require('./_json');
const _raw = require('./_raw');
const _static = require('./_static');
const _text = require('./_text');
const _urlencoded = require('./_urlencoded');
const options = {
    _json,
    _raw,
    _static,
    _text,
    _urlencoded
};

module.exports = {
    logger,
    options
};
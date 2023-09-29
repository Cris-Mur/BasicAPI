/**
 * Module for handling options related to serving static files.
 * @module StaticFileOptions
 */
const express = require("express");
const { parseBoolean } = require('../utils/parse_boolean');
const { splitCsv } = require('../utils/split_csv');
const { handlePath } = require('../utils/handle_path');

/**
 * Represents the options for serving static files.
 * @typedef {Object} StaticFileOptions
 * @property {string} dotfiles - How to handle dotfiles (allow, deny, ignore).
 * @property {boolean} etag - Indicates if ETags should be enabled.
 * @property {string[]|false} extensions - Allowed file extensions for static files.
 * @property {boolean} fallthrough - Indicates if non-found files should fall through to the next middleware.
 * @property {boolean} immutable - Indicates if "immutable" caching should be enabled.
 * @property {string|undefined} index - The default file to serve when a directory is accessed.
 * @property {boolean} lastModified - Indicates if "Last-Modified" headers should be used.
 * @property {number} maxAge - The maximum age in milliseconds for caching static files.
 * @property {boolean} redirect - Indicates if redirect should be enabled for trailing slashes.
 * @property {Function} setHeaders - A function to set custom headers for responses.
 */

/**
 * Generates options for serving static files with customizable settings.
 * @param {Function} [setHeaders=undefined] - An optional function to set custom headers for responses.
 * @returns {StaticFileOptions} Options for serving static files.
 */
function handlerOptions(setHeaders = undefined) {
    /**
     * The options for serving static files.
     * @type {StaticFileOptions}
     */
    let options = {
        dotfiles: process.env.STATIC_DOTFILES || 'ignore', // allow, deny, ignore
        etag: parseBoolean(process.env.STATIC_ETAG) || true,
        extensions: splitCsv(process.env.STATIC_EXTENSIONS) || false,
        fallthrough: parseBoolean(process.env.STATIC_FALLTHROUGH) || true,
        immutable: parseBoolean(process.env.STATIC_IMMUTABLE) || false,
        index: handlePath(process.env.STATIC_INDEX) || undefined,
        lastModified: parseBoolean(process.env.STATIC_LASTMODIFIED) || true,
        maxAge: parseInt(process.env.STATIC_MAXAGE) || 0,
        redirect: parseBoolean(process.env.STATIC_REDIRECT) || true,
        setHeaders
    };

    console.log('[ STATIC OPTIONS ]', JSON.stringify(options));

    return options;
}

/**
 * Exports the function to generate options for serving static files.
 * @type {Object}
 */
module.exports = express.static(
    handlePath(process.env.STATIC_DIR),
    handlerOptions()
);

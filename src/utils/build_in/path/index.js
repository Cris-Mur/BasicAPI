const { normalize_ } = require('./normalize');

const path = require('node:path');

path.normalize = normalize_;

module.exports = path;

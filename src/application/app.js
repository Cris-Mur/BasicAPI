const express = require('express');
const { setExtensions } = require('./utils/set_extensions');

const application = setExtensions(express());

application.disable('x-powered-by');

module.exports = application
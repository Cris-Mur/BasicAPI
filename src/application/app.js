const express = require('express');
const { setExtensions } = require('./utils/set_extensions');
const { setLocals } = require('./utils/set_locals');

const application = setExtensions(express());

application.disable('x-powered-by');

setLocals(application);

module.exports = application
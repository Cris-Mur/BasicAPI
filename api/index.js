const application = require('../src/application');
const logger = require('../src/application/utils/logger');
console.time("Startup")
console.debug("StartUp Application");

/// #############################################################

const mainApplication = new application();
console.debug(mainApplication);

module.exports = mainApplication.express
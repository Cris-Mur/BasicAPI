const application = require('../application');
const logger = require('../application/utils/logger');
console.time("Startup")
console.debug("StartUp Application");

/// #############################################################

const mainApplication = new application();
console.debug(mainApplication);

module.exports = mainApplication.express
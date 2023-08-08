const { locals } = require('../config/_locals');
function setLocals(application) {
    application.locals = locals
}

module.exports = {
    setLocals
};
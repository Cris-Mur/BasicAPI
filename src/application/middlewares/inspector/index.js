const performance = require('./utils/performance');
const crypto = require('node:crypto');
async function inspector(req, res, next) {
    console.log(`[${req.method}][${req.hostname}][${req.baseUrl}][${req.path}]`);
    let req_id = crypto.randomBytes(16).toString('hex');
    console.log('[URL]', req.protocol + '://' + req.get('host') + req.originalUrl);
    req.performance = new performance();
    next();
}



module.exports = {
    inspector
};
const application = require('./app');
const middlewares = require('./middlewares');

const configuration = require('./config');


function startUp(env) {
    console.log('[Enviroment]', env);
    application.use(middlewares.inspector);
    return application;
}

module.exports = {
    startUp
}
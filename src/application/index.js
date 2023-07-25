const production = require('./app');
const development = require('./development_app');

function manage_env(env) {
    console.log('[Enviroment]', env);
    switch (env) {
        case 'production':
            return production;
        case 'development':
            return development;
        default:
            return production;
    }
}

module.exports = {
    manage_env
}
const raw_log = console.log;

console.log = function (...args) {
    let env = process.env.NODE_ENV;
    switch (env) {
        case 'production':
            raw_log(`[${new Date().toISOString()}]`, ...args);
            return;
        case 'development':
            raw_log(`[development][${new Date().toISOString()}]`, ...args);
            return;
        default:
            raw_log(...args);
    }
};

const raw_error = console.error;

console.error = function (...args) {
    let env = process.env.NODE_ENV;
    switch (env) {
        case 'production':
            raw_error(`[${new Date().toISOString()}][ERROR]`, ...args);
            return;
        case 'development':
            raw_error(`[development][${new Date().toISOString()}][ERROR]`, ...args);
            return;
        default:
            raw_error(...args);
    }
};

module.exports = console;
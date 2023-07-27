function port_env() {
    let port;
    let env = process.env.NODE_ENV;
    switch (env) {
        case 'production':
            port = process.env.PORT;
            break;
        case 'development':
            port = process.env.PORT_DEV || process.env.PORT;
            break;
        default:
            port = process.env.PORT;
            break;
    }
    return port;
}

module.exports = {
    port_env
};
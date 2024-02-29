/**
 * Module to push middlewares extensions to an Express application.
 * @module MiddlewareConfiguration
*/

const boolean = require("../utils/parse/boolean");
const build_in = require("./features/build_in");
const homebrew = require('./features/homebrew');
// The locals, arent a middleware
const { locals } = require('./features/build_in/_locals');
// Swagger Spec
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { SwaggerTheme } = require('swagger-themes');
const swaggerDocument = require('./features/openapi');
// General Router
const router = require('../../services/router');


/**
 * Sets middleware extensions based on configuration options.
 * @param {Express instance} application 
 */
function setupPosibleExpressMiddlewares(application, middlewares = build_in) {
    // Incase that you need pass a specific middlewares additional by default
    if (boolean(process.env.BUILD_IN_FEATURES))
        middlewares = { ...build_in, ...middlewares };

    console.debug("[middlewares to load]", middlewares);
    for (const setting in middlewares) {
        if (!middlewares[setting])
            continue;
        console.debug('[loading middleware]', setting, middlewares[setting]);
        if (setting === "_static") {
            setupStaticFeature(application);
        }
        application.use(middlewares[setting]);
    }
    return application;
}

/**
 * Function that runs policy to start static srv feature
 * @param {Express instance} application
 */
function setupStaticFeature(application) {
    if (!build_in._static)
        return;
    // policy at load _static feature
    // Custom path:
    const defaultPath = '/static/';
    const customPath = process.env?.STATIC_PATH ?? defaultPath;
    console.debug("[_static middleware path]", customPath);
    application.use(customPath, build_in._static);
}

/**
 * Function that set locals variables in express application
 * @param {Express instance} application
 */
function setupExpressLocals(application) {
    if (boolean(process.env.LOCAL_VARS))
        application.locals = locals;
    console.debug('[locals vars]', locals);
}

/**
 * Function that dissable x-powered-by header
 * @param {Express instance} application
 */
function setupExpressPoweredby(application) {
    // Disable 'x-powered-by' header for security, if you know that is 
    // Express you know that's machine.
    if (!boolean(process.env.DISSABLE_POWERED_BY))
        return;
    application.disable('x-powered-by');
}

/**
 * Function that build swagger settings and set swagger in express
 * @param {Express instance} application
 */
function setupSwagger(application) {
    if (!boolean(process.env.SWAGGER))
        return;
    const spec = {
        definition: swaggerDocument,
        apis: ['./src/**/*.js'], // files containing annotations as openapi
    };
    const theme = new SwaggerTheme();
    const options = {
        explorer: true,
        customCss: theme.getBuffer(process.env?.SWAGGER_THEME ?? 'classic')
    };
    const swaggerPath = process.env?.SWAGGER_PATH ?? '/api';
    application.use(
        swaggerPath,
        swaggerUi.serve,
        swaggerUi.setup(
            swaggerJsdoc(spec),
            options
        )
    );
    /**
     * @swagger
     *  /openapi:
     *      get:
     *          description: get openapi json
     *          responses:
     *              200:
     *                  description: Returns a mysterious string.
     */
    application.get("/openapi", (req, res) => {
        res.status(200).json(swaggerJsdoc(spec));
    })
}

/**
 * Fuction that set inspector middleware
 * @param {Express instance} application
 */
function setupInspector(application) {
    if (!boolean(process.env.INSPECTOR))
        return;
    application.use(homebrew.middlewares.inspector);
}

/**
 * Function that setup Service Router into application
 * @param {Express instance} application
 */
function setupRouter(application) {
    application.use("/", router);
    return application;
}

/**
 * Function that setup Http Error handling
 * @param {Express instance} application
 */
function setupErrorHanding(application) {
    if (!boolean(process.env.ERRORS_HANDLERS))
        return;
    application.use(homebrew.middlewares.cannotGet);
    application.use(homebrew.middlewares.errorHandler);
}



/**
 * @function setup
 * @description Builder of all settings to make express app
 * @param {Express instance} application
 * @param {Object} settings - Express middleware object collection as value
 * @returns {Object} The modified Express application with middleware extensions.
 */
function setup(application) {
    setupPosibleExpressMiddlewares(application);
    setupExpressLocals(application);
    setupExpressPoweredby(application);
    setupSwagger(application);
    setupInspector(application);
    setupRouter(application);
    setupErrorHanding(application);
    return application;
}

module.exports = setup;
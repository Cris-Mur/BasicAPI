const ExpressController = require('./controller');

const Builder = require('../builder');

const boolean = require('#Utils/boolean');
const build_in = require("../../features/build_in");
const locals = require("../../features/_locals");
const homebrew = require('../../features/homebrew');
const network = require('../../features/network');
const router = require('../../../../services/router');

const swaggerDocument = require('../../features/openapi')
const { SwaggerTheme } = require('swagger-themes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const path = require('node:path');

/**
 * @class ExpressBuilder
 * @description - Class with all methods to build a Express Application
 */
class ExpressBuilder extends Builder {

    reset() {
        console.debug(`[ExpressBuilder][Reset][Clean Instance]`);
        this.controller = new ExpressController();// {app: Express, features: [], locals: {}}
    }

    stepBasic() {
        this.reset();
        this.stepSetNetwork();
    }

    stepBuildinFeatures() {
        const application = this.controller;
        if (!boolean(process.env.BUILD_IN_FEATURES))
            return;

        const middlewares = build_in;
        for (const setting in middlewares) {
            if (!middlewares[setting])
                continue;
            console.debug('[loading middleware]', setting, middlewares[setting]);
            if (setting === "_static") {
                /**
                 * Function that runs policy to start static srv feature
                 * @param {Express instance} application
                 */
                function setupStaticFeature(application) {
                    if (!build_in._static)
                        return;
                    // policy at load _static feature
                    // Custom path:
                    const defaultPath = '/';
                    const customPath = process.env?.STATIC_PATH ?? defaultPath;
                    console.debug("[_static middleware path]", customPath);
                    application.pushPathFeature(build_in._static, customPath);
                }
                setupStaticFeature(application);
                continue;
            }
            application.pushGeneralFeature(middlewares[setting]);
        }
    }

    stepDisablePoweredby() {
        // Disable 'x-powered-by' header for security, if you know that is 
        // Express you know that's machine.
        if (!boolean(process.env.DISSABLE_POWERED_BY))
            return;
        function disablePoweredby(application) {
            application.disable('x-powered-by');
        }
        disablePoweredby(this.controller.app);
        this.controller.features.push(disablePoweredby)
    }

    stepSetFavicon() {
        /**
         * Function that set favicon route
         * @param {Express instance} application
         */
        function setupFavicon(application) {
            application.get('/favicon.ico', (req, res) => {
                const favicon = '/public/favicon.ico';
                res.sendFile(path.join(process.cwd(), favicon));
            })
        }
        const application = this.controller.app;
        setupFavicon(application);
        this.controller.features.push(setupFavicon);
    }

    stepSwagger() {
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
                // https://www.npmjs.com/package/swagger-themes?activeTab=readme#themes
                customCss: theme.getBuffer(process.env?.SWAGGER_THEME ?? 'classic')
            };
            const swaggerPath = process.env?.SWAGGER_PATH ?? '/api';
            console.debug('[Swagger mountpoint in API PATH]', swaggerPath);
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
             *  /swagger/openapi:
             *      get:
             *          description: get openapi json
             *          responses:
             *              200:
             *                  description: Returns a mysterious string.
             */
            application.get("/swagger/openapi", (req, res) => {
                res.status(200).json(swaggerJsdoc(spec));
            })
        }
        const application = this.controller.app;
        setupSwagger(application);
        this.controller.features.push(setupSwagger);
    }

    stepSetInspector() {
        if (!boolean(process.env.INSPECTOR))
            return;
        this.controller.pushGeneralFeature(homebrew.middlewares.inspector);
    }

    stepSetErrorHandler() {
        if (!boolean(process.env.ERRORS_HANDLERS))
            return;
        this.controller.pushGeneralFeature(homebrew.middlewares.cannotGet);
        this.controller.pushGeneralFeature(homebrew.middlewares.errorHandler);
    }

    stepSetRouter() {
        this.controller.pushPathFeature(router);
    }

    stepSetLocals() {
        if (!boolean(process.env.LOCAL_VARS))
            return;
        this.controller.overrideLocals(locals);
    }

    stepSetNetwork() {
        if (boolean(process.env.SERVERLESS))
            return;
        const application = this.controller.getApplication();

        // Normalize the port and set it on the application
        this.controller.setPort(network.utils.port);

        // Create and start the server
        const server = network._http.create_server(application);
        server.listen(network.utils.port);

        // Handle server errors and listening events
        server.on('error', network._http.onError);
        server.on('listening', network._http.onListening);
        this.server = server;
    }

    getProduct() {
        console.debug(
            "[Express Features]", this.controller.features,
            '[Express Locals]', this.controller.locals
        );
        return this.controller.getApplication();
    }
}

module.exports = ExpressBuilder;
const ExpressController = require('./express_controller');

const Builder = require('../builder');

const boolean = require('#Utils/boolean');
const build_in = require("../../features/build_in");
const locals = require("../../features/_locals");
const homebrew = require('../../features/homebrew');
const router = require('../../../../services/router');
const swaggerDocument = require('../../features/openapi')
const { SwaggerTheme } = require('swagger-themes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

/**
 * @class ExpressBuilder
 * @description - Class with all methods to build a Express Application
 */
class ExpressBuilder extends Builder {
    #result;
    reset() {
        console.debug(`[ExpressBuilder][Reset][Clean Instance]`);
        this.#result = new ExpressController();
        // {app: Express, features: [], locals: {}}
    }

    cleanExpress() {
        this.reset();
        this.stepSetNetwork();
    }

    stepBuildinFeatures() {
        const application = this.#result;
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
                    application.addRoutedFeature(customPath, build_in._static);
                }
                setupStaticFeature(application);
                continue;
            }
            application.addGlobalFeature(middlewares[setting]);
        }
    }

    stepDisablePoweredby() {
        // Disable 'x-powered-by' header for security, if you know that is 
        // Express you know that's machine.
        if (!boolean(process.env.DISSABLE_POWERED_BY))
            return;
        const property = 'x-powered-by';
        this.#result.disableProperty(property);
        this.#result.pushInFeatures(this.stepDisablePoweredby);
    }

    stepSetFavicon() {
        const favicon = '/public/favicon.ico';
        this.#result.setFavicon(favicon);
    }

    stepSwagger() {
        if (!boolean(process.env.SWAGGER))
            return;

        const swaggerPath = process.env?.SWAGGER_PATH ?? '/api';
        console.debug('[Swagger mountpoint in API PATH]', swaggerPath);

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

        const swagger = [
            swaggerUi.serve,
            swaggerUi.setup(
                swaggerJsdoc(spec),
                options
            )
        ];

        this.#result.addRoutedFeature(swaggerPath, swagger);
        /**
         * @swagger
         *  /swagger/openapi:
         *      get:
         *          description: get openapi json
         *          responses:
         *              200:
         *                  description: Returns a mysterious string.
         */
        this.#result.addRoutedFeature("/swagger/openapi", (req, res) => {
            res.status(200).json(swaggerJsdoc(spec));
        })
    }

    stepSetInspector() {
        if (!boolean(process.env.INSPECTOR))
            return;
        this.#result.addGlobalFeature(homebrew.middlewares.inspector);
    }

    stepSetErrorHandler() {
        if (!boolean(process.env.ERRORS_HANDLERS))
            return;
        this.#result.addGlobalFeature(homebrew.middlewares.cannotGet);
        this.#result.addGlobalFeature(homebrew.middlewares.errorHandler);
    }

    stepSetRouter() {
        const mainRouter = router;
        this.#result.addRoutedFeature("/", mainRouter);
    }

    stepSetLocals() {
        if (!boolean(process.env.LOCAL_VARS))
            return;
        for (let key in locals) {
            const value = locals[key];
            this.#result.setApplicationLocalVar(key, value);
        }
    }

    getResult() {
        console.debug(
            "[ExpressBuilder][GET RESULT][Express Features]\n",
            this.#result.getFeatures(),
            '[ExpressBuilder][GET RESULT][Express Locals]\n',
            this.#result.getLocals()
        );
        const result = this.#result;
        this.reset();
        return result
    }
}

module.exports = ExpressBuilder;
/**
 * @module
 * @license MIT
 * Builder implementation of a Class with all methods to build 
 * an Express Application. 
 * @author @Cris-Mur
 */

const requireUncached = require('#Utils/requireUnCached');
const ExpressController = require('./express_controller');

const Builder = require('../builder');

const boolean = require('#Utils/boolean');
const build_in = require("../../features/build_in");
const locals = require("../../features/_locals");
const homebrew = require('../../features/homebrew');
const router = require('../../../../services/router');

const { SwaggerTheme } = require('swagger-themes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

/**
 * @class ExpressBuilder
 * @description - Class with all methods to build an Express Application.
 * @property {ExpressController} #result
 * @extends Builder
 */
class ExpressBuilder extends Builder {
    #result;

    /**
     * @method reset
     * @description - Resets the result to a new instance of ExpressController.
     */
    reset() {
        console.debug(`[ExpressBuilder][Reset][Clean Instance]`);
        this.#result = new ExpressController();
    }

    /**
     * @method stepBuildinFeatures
     * @description - Adds built-in features to the application if enabled by environment variables.
     */
    stepBuildinFeatures() {
        if (!boolean(process.env.BUILD_IN_FEATURES)) return;

        const middlewares = build_in;
        for (const setting in middlewares) {
            if (!middlewares[setting]) continue;
            console.debug('[loading middleware]', setting, middlewares[setting]);
            if (setting === "_static") {
                /**
                 * @function setupStaticFeature
                 * @description - Function that runs policy to start static srv feature.
                 * @param {ExpressController} expressController - The Express application instance.
                 */
                function setupStaticFeature(expressController) {
                    if (!build_in._static) return;
                    const defaultPath = '/';
                    const customPath = process.env?.STATIC_PATH ?? defaultPath;
                    console.debug("[_static middleware path]", customPath);
                    expressController.addRoutedFeature(customPath, build_in._static);
                }
                setupStaticFeature(this.#result);
                continue;
            }
            this.#result.addGlobalFeature(middlewares[setting]);
        }
    }

    /**
     * @method stepDisablePoweredby
     * @description - Disables the 'x-powered-by' header for security if enabled by environment variables.
     */
    stepDisablePoweredby() {
        if (!boolean(process.env.DISSABLE_POWERED_BY)) return;
        const property = 'x-powered-by';
        this.#result.disableProperty(property);
        this.#result.pushInFeatures(this.stepDisablePoweredby);
    }

    /**
     * @method stepSetFavicon
     * @description - Sets the favicon for the application.
     */
    stepSetFavicon() {
        const favicon = '/public/favicon.ico';
        this.#result.setFavicon(favicon);
    }

    /**
     * @method stepSwagger
     * @description - Sets up Swagger documentation for the application if enabled by environment variables.
     */
    stepSwagger() {
        if (!boolean(process.env.SWAGGER)) return;

        let swaggerDocument = requireUncached('../../features/openapi', __dirname);

        const spec = {
            definition: swaggerDocument,
            apis: ['./src/**/*.js'],
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

        const swaggerPath = process.env?.SWAGGER_PATH ?? '/api';
        console.debug('[Swagger mountpoint in API PATH]', swaggerPath);
        this.#result.addRoutedFeature(swaggerPath, swagger);

        /**
         * @swagger
         *  /swagger/openapi:
         *    get:
         *      description: get openapi json
         *      responses:
         *        200:
         *          description: Returns a mysterious string.
         */
        this.#result.addRoutedFeature("/swagger/openapi", (req, res) => {
            res.status(200).json(swaggerJsdoc(spec));
        });
    }

    /**
     * @method stepSetInspector
     * @description - Sets up the inspector middleware if enabled by environment variables.
     */
    stepSetInspector() {
        if (!boolean(process.env.INSPECTOR)) return;
        this.#result.addGlobalFeature(homebrew.middlewares.inspector);
    }

    /**
     * @method stepSetErrorHandler
     * @description - Sets up error handlers if enabled by environment variables.
     */
    stepSetErrorHandler() {
        if (!boolean(process.env.ERRORS_HANDLERS)) return;
        this.#result.addGlobalFeature(homebrew.middlewares.cannotGet);
        this.#result.addGlobalFeature(homebrew.middlewares.errorHandler);
    }

    /**
     * @method stepSetRouter
     * @description - Sets up the main router for the application.
     */
    stepSetRouter() {
        const mainRouter = router;
        this.#result.addRoutedFeature("/", mainRouter);
    }

    /**
     * @method stepSetLocals
     * @description - Sets local variables for the application if enabled by environment variables.
     */
    stepSetLocals() {
        if (!boolean(process.env.LOCAL_VARS)) return;
        for (let key in locals) {
            const value = locals[key];
            this.#result.setApplicationLocalVar(key, value);
        }
    }

    /**
     * @method getResult
     * @description - Returns the current result and resets the builder.
     * @returns {ExpressController} The current result.
     */
    getResult() {
        console.debug(
            "[ExpressBuilder][GET RESULT][Express Features]\n",
            this.#result.getFeatures(),
            '[ExpressBuilder][GET RESULT][Express Locals]\n',
            this.#result.getLocals()
        );
        const result = this.#result;
        this.reset();
        return result;
    }
}

module.exports = ExpressBuilder;

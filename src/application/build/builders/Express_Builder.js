/**
 * @module
 * @license MIT
 * Builder implementation of a Class with all methods to build 
 * an Express Application. 
 * @author @Cris-Mur
 */

const requireUncached = require('#Utils/requireUnCached');
const boolean = require('#Utils/boolean');
const Builder = require('./Builder');
const EngineExpress = require('./Engines').ExpressEngine;
const ExpressController = EngineExpress.ExpressController;

const buildIn = EngineExpress.features.buildIn;
const locals = EngineExpress.features.buildIn.properties.locals;
const homebrew = EngineExpress.features.homebrew;

const router = require('#MainRouter');

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
        console.debug('[ExpressBuilder][Reset][Clean Instance]');
        this.#result = new ExpressController();
    }

    /**
     * @method stepBuildinMiddlewares
     * @description - Adds built-in features to the application if enabled by environment variables.
     */
    stepBuildinFeatures() {
        if (!boolean(process.env.BUILD_IN_FEATURES)) return;

        console.debug(
            '[ExpressBuilder][stepBuildinFeatures][LOADING BUILD IN FEATURES]',
            buildIn
        );
        this.stepStaticServer();
        this.stepSetCors();
        this.stepParsers();
    }

    stepParsers() {
        const parsers = buildIn.middlewares.parsers;

        for (const parser in parsers) {
            if (!parsers[parser]) continue;
            console.warn('[####][BUILD IN PARSERS][#####]', parser);
            this.#result.addGlobalFeature(parsers[parser]);
        }
    }
    stepStaticServer() {
        if (!buildIn.middlewares.staticServer) return;
        const defaultPath = '/';
        const customPath = process.env?.STATIC_PATH ?? defaultPath;
        console.debug('[static server middleware path]', customPath);
        this.#result.addRoutedFeature(customPath, buildIn.middlewares.staticServer);
    }

    stepSetCors() {
        if(!buildIn.middlewares.cors) return;
        console.debug('[ExpressBuilder][stepSetCors]');
        this.#result.addGlobalFeature(buildIn.middlewares.cors);
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

        const swaggerDocument = requireUncached('./api_specification/spec_controller.js', __dirname);

        const spec = {
            definition: swaggerDocument,
            apis: ['./src/**/*.js'],
        };

        const theme = new SwaggerTheme();

        const options = {
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
        this.#result.addRoutedFeature('/swagger/openapi', (req, res) => {
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
        this.#result.addRoutedFeature('/', mainRouter);
    }

    /**
     * @method stepSetLocals
     * @description - Sets local variables for the application if enabled by environment variables.
     */
    stepSetLocals() {
        if (!boolean(process.env.LOCAL_VARS)) return;
        for (const key in locals) {
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
            '[ExpressBuilder][GET RESULT][Express Features]\n',
            this.#result.getFeatures());
    
        console.debug(
            '[ExpressBuilder][GET RESULT][Express Locals]\n',
            this.#result.getLocals()
        );
        const result = this.#result;
        this.reset();
        return result;
    }
}

module.exports = ExpressBuilder;

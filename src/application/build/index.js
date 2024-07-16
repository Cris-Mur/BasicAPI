/**
 * Module to push middlewares extensions to an Express application.
 * @module MiddlewareConfiguration
 * @license MIT
 * @author Cris-Mur
*/

const { ExpressDirector } = require('./Director');

module.exports = function build() {
    try {
        console.debug('[Build][Building a express Application]');
        const director = new ExpressDirector();
        return director.make();
    } catch (error) {
        console.error(`[build][ExpressDirector][ # ERROR # ]`, error);
    }
}
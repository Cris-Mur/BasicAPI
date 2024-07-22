/**
 * Module exports a function thats build a express instance.
 * @module Build
 * @license MIT
 * @author Cris-Mur
*/

const { ExpressDirector } = require('./Director');

module.exports = function build() {
    try {
        console.debug('[Build][Building a express Application]');
        const director = ExpressDirector;
        return director.make();
    } catch (error) {
        console.error(`[build][ExpressDirector][ # ERROR # ]`, error);
    }
}
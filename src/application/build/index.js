/**
 * Module exports a function thats build a express instance.
 * @module Build
 * @license MIT
 * @author Cris-Mur
*/

const { ExpressDirector } = require('./Director');
const { ExpressBuilder } = require('./builders');

module.exports = function build() {
    try {
        console.debug("[BUILD][Building Application]");
        const director = new ExpressDirector();
        director.setBuilder(new ExpressBuilder());
        return director.make();
    } catch (error) {
        console.error("[build][ExpressDirector][ # ERROR # ]", error);
        throw new Error('Error on Building process of Application');
    }
}
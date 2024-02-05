/**
 * @function errorTester - Function to test how app fails request.
 * @param {Express require} req 
 * @param {Express response} res 
 * @param {Express next middleware} next 
 */
function errorTester(req, res, next) {
    console.debug('[Testing error handler]');
    next(new Error("Typical message about error"));
}


module.exports = { errorTester };

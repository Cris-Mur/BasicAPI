function errorTester(req, res, next) {
    console.debug('[Testing error handler]');
    next(new Error("Typical message about error"));
}


module.exports = { errorTester };

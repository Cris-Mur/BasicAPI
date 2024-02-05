const router = require('express').Router();
const { errorTester } = require('./error_test_endpoint');

router.get("/test-error-message", errorTester);


module.exports = router;

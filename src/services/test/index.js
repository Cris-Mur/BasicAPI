const router = require('express').Router();
const { errorTester } = require('./error_test_endpoint');

router.get("/error/test", errorTester);


module.exports = router;

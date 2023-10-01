const router = require('express').Router();
/**
 * here start a root router of Application
 */
const tester = require('./test');


router.use("/", tester);

module.exports = router;

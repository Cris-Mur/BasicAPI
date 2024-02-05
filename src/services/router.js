const router = require('express').Router();
/**
 * here start a root router of Application
 */
const home = require('./API/home');


router.use("/", home);

module.exports = router;

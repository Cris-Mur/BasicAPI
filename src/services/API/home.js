const router = require('express').Router();
// const {  } = require('./');
const errors = require('./errors');

router.use('/errors', errors);

/**
 * @swagger
 */
// router.get("/error/test", );


module.exports = router;

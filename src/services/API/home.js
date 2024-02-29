const router = require('express').Router();
// const {  } = require('./');
const errors = require('./errors');

router.use('/errors', errors);

/**
 * @swagger
 * /example:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
// router.get("/error/test", );


module.exports = router;

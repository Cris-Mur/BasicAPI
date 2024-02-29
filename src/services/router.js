const router = require('express').Router();
/**
 * here start a root router of Application
 */
const home = require('./API/home');

router.use("/", home);

/**
 * @swagger
 * /:
 *   get:
 *     description: redirect root endpoint to documentation api
 *     responses:
 *       200:
 *         description: html of swagger.
 */
router.get('/', (req, res) => {
    res.redirect('/api');
})

module.exports = router;

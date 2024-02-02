/**
 * @function cannotGet - This function handles 404 case request.
 * @param {Express require} req 
 * @param {Express response} res 
 * @returns {Express response}
 */
function cannotGet(req, res) {
    console.error("trying acces not managed endpoint", 
        '[URL]', 
        `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    return res.status(404).send();
}

module.exports = {cannotGet};

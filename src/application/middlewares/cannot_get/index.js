function cannotGet(req, res) {
    console.error("trying acces not managed endpoint", 
        '[URL]', 
        `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    return res.send('I catch you');
}

module.exports = {cannotGet};

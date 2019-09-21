const express = require('express');

const router = express.Router();

// Get Posts (this '/' refers to /api/sim)
router.post('/', async (req, res) => {
    const data = req.body.numberOfAnts;
    res.status(200).send(`received ${data} ants! Goodbye from the back-end!`);
});

module.exports = router;
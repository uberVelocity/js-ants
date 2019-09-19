const express = require('express');

const router = express.Router();

// Get Posts (refers to /api/sim)
router.get('/', async (req, res) => {
    res.send('Ah shit here we go again');
});

module.exports = router;
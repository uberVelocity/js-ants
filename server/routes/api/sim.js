const ant = require('../../model/Ant.js');
const express = require('express');

const router = express.Router();

// Get Posts (this '/' refers to /api/sim)
router.post('/', async (req, res) => {
    const numberOfAnts = req.body.numberOfAnts;
    const ants = await ant.randomOverlapStart(numberOfAnts, req.body.mapX, req.body.mapY);
    res.status(200).send(ants);
});

module.exports = router;
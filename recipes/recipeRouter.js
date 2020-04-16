const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('recipes')
    .then(recipes => {
        res.json(recipes);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to retrieve recipes'
        });
    });
});

module.exports = router;
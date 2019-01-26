const express = require('express');
const router = express.Router();

// Assignment 1

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Assignment 2

function isInt(j) {
    let pattern = /^\+?0*[1-9]\d*$/;
    return pattern.test(j);
}

router.get('/getData', (req, res) => {
    const numVal = req.query.number;
    if (numVal === undefined || numVal === "") {
        res.render('getData');
    } else if (isInt(numVal)) {
        let total = 0;
        for (let i = 1; i <= numVal; i++) {
            total += i;
        }
        res.render('total', {total});
    } else {
        res.render('wrong');
    }
});

module.exports = router;
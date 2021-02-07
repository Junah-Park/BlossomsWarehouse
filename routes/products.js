const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const user = require('../models/userSchema');

router.post('/:name', (req, res) => {
    user.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400)
        }
    })
    
})

const express = require('express');
const mongoose = require('mongoose');

const router = express.router();

const catalogSchema = require('../models/catalogSchema');

router.get('/:name', (req, res) => {
    catalogSchema.find(req.body.name)
    .then(catalog => {

    })
})
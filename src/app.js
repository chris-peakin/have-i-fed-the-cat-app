const express = require('express');
const app = express();
const {Cat} = require('./models');
app.use(express.json());

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => res.status(201).json(cat));
});

app.get('/cats', (req, res) => {
    Cat.findAll(req.body).then(cat => res.status(201).json(cat));
});

app.post('/cats/:catId', (req, res) => {
    Cat.findAll(req.body).then(cat => res.status(201).json(cat));
});

app.post('/cats/:catId', (req, res) => {
    Cat.update(req.body, {where: {id: req.params.catId}});
});

module.exports = app;
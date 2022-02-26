const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    return res.status(201).json({result: req.body});
})

module.exports = app;
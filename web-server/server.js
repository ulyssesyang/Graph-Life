const express = require('express');
const path = require('path');
const config = require('config');

const app = express();
const mongodbUri = config.get('mongodbUri');

const mongoose = require('mongoose');
const contentDB = mongoose.connect(mongodbUri);

const restRouter = require('./routes');

app.use('/api/v1', restRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log("App is listening to " + PORT);
})
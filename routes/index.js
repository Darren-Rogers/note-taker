const express = require('express');
const postRouter = require('./notes')
const app = express();
app.use('/notes', postRouter)
module.exports = app
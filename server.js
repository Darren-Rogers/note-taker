const express = require('express');
const path = require('path')
const index = require('./routes/index')
const util = require('util');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))
app.use('/api', index)

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, './public/index.html'))
})
app.get('/notes', function(req,res){
  res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, './public/index.html'))
})
app.listen(PORT, ()=>{
  console.log(`listeing at http://localhost:${PORT}`)
})

module.exports = express
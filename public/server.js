const express = require('express');
const path = require('path')
const fs = require('fs');
const util = require('util');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '/index.html'))
})
app.get('/notes', function(req,res){
  res.sendFile(path.join(__dirname, '/notes.html'))
})

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, '/index.html'))
})
app.listen(PORT, ()=>{
  console.log(`listeing at http://localhost:${PORT}`)
})

app.post('api/notes', function(req, res){
  const notes = req.body
  console.log(notes)
  const text = req.body.text;
 
})

const express = require('express');
const path = require('path')
const fs = require('fs');
const util = require('util');
const {readAndAppend, readFromFile, writeToFile} = require('./helper/new')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

app.post('api/notes', function(req, res){
  const notes = req.body
  console.log(notes)
  const text = req.body.text;
  if(notes){
    var newNotes = {title, text};
    readAndAppend(newNotes,'./db/db.json')
    res.json('New Note added')
  }else{
    res.error(err);
  }
 
})
module.exports = express
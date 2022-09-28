const router = require('express').Router();
const { rawListeners } = require('.');
const {readAndAppend, readFromFile, writeToFile} = require('../helper/new')


router.get('/', (req, res)=>{
  readFromFile('./db/db.json').then((data)=>
  res.json(JSON.parse(data)))
})
router.delete('/:id', async (req,res)=>{
  const deleteById = req.params.id;
  const readFile = await readFromFile('./db/db.json')
  const read = JSON.parse(readFile)
  const done = read.filter(z => z.id !== deleteById)
  writeToFile('./db/db.json', done)
})
router.post('/', (req,res)=>{
  const {title, text} =req.body
  if(req.body){
    const post = {title, text}
    readAndAppend(post, './db/db.json')
    
  }
  else{
    res.json(err)
  }
})
module.exports = router
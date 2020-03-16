const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get( '/', (req, res) => {
  db.select('*')
  .from("accounts")
  .then( rows => {
    res.status(200).json({data: rows})
  })
  .catch( error => 
    res.status(500).json( {"message": "sorry there was an error retrieving the accounts"}))
});

// router.get('/:id', (req, res) => {

// });

// router.post('/', (req, res) => {
  
// });

// router.put('/:id', (req, res) => {
  
// });

// router.delete('/:id', (req, res) => {
  
// });

module.exports = router;
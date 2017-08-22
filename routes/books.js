const express = require('express');
const router = express.Router();
const queries = require('../queries')

router.get('/', function(req, res, next) {
  queries.getBooks()
    .then((books) => {
      res.json(projects)
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

module.exports = router;

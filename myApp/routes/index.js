var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://@localhost/memoriesapp";


/* GET users listing. */
router.get('/', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * from memories', function(err, result) {
      done();
      res.render('index', {});
      if (err) {
        return console.error('error running query', err);
      }
    });
  });
});

module.exports = router;

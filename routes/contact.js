var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with users main page');
});
router.get('/getUser:id', function(req, res, next) {
    res.send('respond with users main page');
  });
router.post('/addUser', function(req, res, next) {
    res.send('add a user by filling out form and send as a request');
});
router.patch('/update:id', function(req, res, next) {
    res.send('respond with users main page');
});
module.exports = router;
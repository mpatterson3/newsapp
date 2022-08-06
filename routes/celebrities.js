var express = require('express');
var router = express.Router();
var celebs = [
  { id:1,name:'michael'},
  { id:2, name:'prince'},
  { id:3, name:'kodak black'},
  { id:4, name:'mystikal'},
  { id:5, name:'redman'}
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('celebrities',{title:"celebs"});
});
router.get('/:id', function(req, res, next) {
  const c = celebs[req.params.id-1];
  //res.send(`<div><h3>${c.id}</h3><h1>${c.name}</h1></div> `);
  res.json(c);
});
router.post('/:name', function(req, res, next) {
  celebs.push({id:celebs.length+1,name:req.body.name});  
  res.send(`added ${req.params.name}`);
});
router.put('/:id', function(req, res, next) {
  const {id} = req.params;

  res.send('update celebrity');
  res.redirect('/' + id);
});
module.exports = router;

var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next){
	models.User.create({
	    username: req.body.username
	  }).then(function() {
	    res.redirect('/');
	  });
});

router.get('/list', function(req, res, next){
	models.User.findAll().then(function(users) {
				    res.send(JSON.stringify({usuarios: users}));
    });
});

router.get('/add/:username', function(req, res, next){
	var nombre = req.params.username
	console.log('U: ' + nombre);
	models.User.create({
	    username: req.params.username
	  }).then(function() {
	    	models.User.findAll().then(function(users) {
				    res.send(JSON.stringify({usuario: users}));
	    });
	  });
});

router.get('/delete/:username', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.username
    }
  }).then(function() {
	    	models.User.findAll().then(function(users) {
				    res.send(JSON.stringify({usuario: users}));
	    });
	  });
});


module.exports = router;

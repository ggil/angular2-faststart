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

router.get('/update/:id/:username', function(req, res) {
  models.User.findById(req.params.id).then(function(usuario) {
	  if (usuario) { // if the record exists in the db
    		usuario.updateAttributes({
      			username: req.params.username
    		}).then(function() {
						models.User.findAll().then(function(users) {
				    	res.send(JSON.stringify({usuario: users}));
					});
			});
	  }
  });
});

module.exports = router;

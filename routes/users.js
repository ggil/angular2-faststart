var models  = require('../models');
var express = require('express');
var router = express.Router();
/* AHERRERA
   TODO

   Restful methods use correctly to DELETE PUT POST
   GET to get example works

*/
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

/*
AHERRERA:
definition of route to allow list the users
*/
router.get('/list', function(req, res, next){
	models.User.findAll().then(function(users) {
				    res.send(JSON.stringify({usuarios: users})); // AHERRERA: note that JSON.stringify denotes the data collection as usuarios
    });
});


/*
AHERRERA:
definition of route to add users
*/
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

/*
AHERRERA:
definition of route to delete users
*/
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

/*
AHERRERA:
definition of route to update user
*/
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

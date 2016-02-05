var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  /*models.User.findAll().then(function(users) {
    res.render('index', {
      title: 'Demo',
      users: users
    });
  });*/
	res.render('index', { title: 'Works', users: null } );
});

module.exports = router;



module.exports = router;

var express = require('express');
var router = express.Router();
var profileController = require('../controllers/ProfileController')

/* GET users listing. */
router.get('/:resource', function(req, res, next) {
  
  var resource = req.params.resource

  if (resource == 'profile') {
  	var data = {
  	confirmation: 'success',
  	resource: 'test'
  	}
  	res.json(data)

  }
  

});

module.exports = router;
var express = require('express');
var router = express.Router(),
    accepts = require('accepts'),
    os = require('os')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Request Header Parser Microservice' });
});

router.get('/whoami', function(req, res){
    var ip = req.ip;
    var lang = accepts(req).language();
    var system = `${os.type()}; ${os.platform()}, ${os.release()}`
    res.send({
      ipaddress: ip,
      language: lang[0], 
      Software: system 
    })
})
module.exports = router;

var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Vinay@123#',
  database : 'sport'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  connection.connect();
 
  connection.query('SELECT * from sporttype', function (error, results, fields) {
    if (error) throw error;
    console.log('this is index',results);
    res.send(results);
  });
  
  connection.end();

});

router.get('/main', function(req,res){
  res.sendFile(__dirname + "/../views/main.html");
})
module.exports = router;

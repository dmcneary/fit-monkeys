var express = require('express');
var router = express.Router();
var path = require("path");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Vinay@123#',
  database : 'sport'
});
router.get('/test', function(req, res, next) {
  
  connection.connect();

  connection.query('SELECT * from sporttype', function (error, results, fields) {
    if (error) throw error;
    console.log('this is backend', results);
    res.send(results);
  });
  
  connection.end();

});

router.get('/main', function(req,res){
  console.log(__dirname)
  res.sendFile(path.join(__dirname , "/../views/main.html"));
})



module.exports = router;

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'mysql-nahuel123.alwaysdata.net',
//   user     : 'nahuel123',
//   password : 'Prueba123-ñ',
//   database : 'nahuel123_productos',
//   connectionLimit: 100,
//   connectTimeout: 60000
// });

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nahuel',
  password : 'root',
  database : 'paginaDeEscalada'
});

module.exports = connection;
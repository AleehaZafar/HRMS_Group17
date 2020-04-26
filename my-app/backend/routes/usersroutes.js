const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'database-hrms1.c0sl004lok1n.eu-west-2.rds.amazonaws.com',
  user: 'Aleeha',
  password: 'Yehmeridbhai',
  port:'3306',
  database: 'HRMS'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

exports.display = async function(req, res){
  
}
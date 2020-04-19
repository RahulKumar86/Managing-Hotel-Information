var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mounty"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a table named "customers":*/
  var sql = "CREATE TABLE customers (Serial INT(2) NOT NULL,name VARCHAR(255),Age INT(2),Gender TEXT,Contact INT(10), address VARCHAR(255), Room VARCHAR(3), Type VARCHAR(10))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

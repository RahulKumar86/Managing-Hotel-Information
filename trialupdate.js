const express = require('express')
var mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(express.static(' '))
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'pug')

app.get('/',function(req,res){
    res.sendFile('update.html',{ root: __dirname })
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mounty'
  });
  connection.connect(function(err){ 
    if (err) throw err;

    console.log('Connected successfully');
  })

app.post('/submit',function(req,res){
    
     var sql = "UPDATE customers SET '"+req.body.Columnn+"' = '"+req.body.value+"' WHERE Serial = '"+req.body.Serial+"'";
    connection.query(sql, function (err) {
        if (err) throw err
        res.render('index',{ title: 'DATA Updation', message: 'Data Updated Successfully'});
        console.log("Number of records updates: " + result.affectedRows);
       
      })   
      connection.end();

    
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
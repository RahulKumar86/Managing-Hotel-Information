const express = require('express')
var mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(express.static(' '))
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'pug')

app.get('/',function(req,res){
    res.sendFile('index.html',{ root: __dirname })
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
    
     var sql="insert into customers values("+req.body.Serial+",'"+req.body.name +"',"+req.body.Age +",'"+req.body.Gender +"',"+req.body.Contact +",'"+req.body.address +"','"+req.body.Room +"','"+req.body.Type +"')"
    connection.query(sql, function (err) {
        if (err) throw err
        res.render('index',{ title: 'DATA', message: ' data saved'})
       
      })   
      connection.end();

    
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
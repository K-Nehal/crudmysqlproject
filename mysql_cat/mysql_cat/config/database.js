const mysql = require('mysql')

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "bloger"
})

connection.connect((err)=>{
if (err) throw error 
console.log("connected");
})

exports.getConnected = connection
// const mysql = require('mysql')
// const db = mysql.createConnection({
//     host:"localhost",
//     user: "root",
//     password:"",
//     database:"mathapp"
// })

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mathapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = mysql;


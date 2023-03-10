var mysql = require('mysql');

var con  = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"mathapp"
})
//check error
con.connect(function(err) {
    if (err) throw err; 
    console.log("connected!");
    sql="insert into newex (ex_mark,ex_number) values('more',3)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("insert complete");
    }); 
    
})


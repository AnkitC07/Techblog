const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "techblog",
    multipleStatements: true 
})

db.connect((err)=>{
    if(!err)
    console.log("connected");
    else
    console.log("connection failed");

});

module.exports = db;
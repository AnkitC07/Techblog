var express = require('express');
var SignupRouter = express.Router();
// var bodyParser = require('body-parser')
const mysqlconnection = require("../connection");

// app.use(bodyParser.json());


SignupRouter.post("/signup",async (req,res)=>{
    let name = await req.body.name;
    console.log(name);
    res.send({
        html: "ankit",
    });

    mysqlconnection.query(`INSERT INTO userinfo (name, email, password) VALUES ("${name}","${req.body.email}","${req.body.password}")`,(err)=>{
        if(err){
        console.log(err)
        throw err;}else console.log("inserted");

    });
});

module.exports= SignupRouter
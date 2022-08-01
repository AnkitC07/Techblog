var express = require('express');
var getBlogRouter = express.Router();
// var bodyParser = require('body-parser')
const mysqlconnection = require("../connection");


getBlogRouter.get("/getblogs",async (req,res)=>{

    const performAsynScanOperation = async () => {
        return new Promise((resolve, reject) => {
            mysqlconnection.query("SELECT u.name,b.* FROM userinfo as u inner join blogs as b on u.id = b.uid", function (err, responseData) {
            if (err) {
              reject(`${err}`);
            } else {
              resolve(responseData);
            }
          });
        });
      };

    

    res.status(200).json({
       data:await performAsynScanOperation()
    })
  
});




module.exports= getBlogRouter
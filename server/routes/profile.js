var express = require('express');
var profileBlogRouter = express.Router();
// var bodyParser = require('body-parser')
const mysqlconnection = require("../connection");


profileBlogRouter.post("/profileblogs",async (req,res)=>{
    let id = req.body.id;
    console.log(id);
    res.status(200)
    const performAsynScanOperation = async () => {
        return new Promise((resolve, reject) => {
            mysqlconnection.query("SELECT user.name,blog.title,blog.description,blog.url,blog.date FROM userinfo as user inner join blogs as blog on blog.uid = user.id WHERE user.id=? ",[id], function (err, responseData) {
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




module.exports=profileBlogRouter
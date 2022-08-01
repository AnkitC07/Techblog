var express = require('express');
var deleteBlogRouter = express.Router();
// var bodyParser = require('body-parser')
const mysqlconnection = require("../connection");


deleteBlogRouter.get("/deleteblogs",async (req,res)=>{

    let id = req.query.id;
    // res.status(200).send({
    //     html:123
    // })
    console.log("server-id:",id)

    // const performAsynScanOperation = async () => {
    //     return new Promise((resolve, reject) => {
    //         mysqlconnection.query("SELECT u.name,b.* FROM userinfo as u inner join blogs as b on u.id = b.uid", function (err, responseData) {
    //         if (err) {
    //           reject(`${err}`);
    //         } else {
    //           resolve(responseData);
    //         }
    //       });
    //     });
    //   };

    

    // res.status(200).json({
    //    data:await performAsynScanOperation()
    // })
    let sql = "DELETE FROM blogs WHERE id=?"
  mysqlconnection.query(sql,[id],(err,result)=>{
    if(err)throw err;
    else{
        console.log(err);
        res.send(err)
    } 
  })
});




module.exports= deleteBlogRouter
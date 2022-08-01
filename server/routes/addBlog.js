var express = require('express')
const app = express()
var AddBlogRouter = express.Router()
// var bodyParser = require('body-parser')
const mysqlconnection = require('../connection')
const fileUpload = require('express-fileupload')
app.use(fileUpload())

var filepath = ''
AddBlogRouter.post('/addBlog', async (req, res) => {
  let sampleFile
  let uploadPath
  // console.log(req.files)
  console.log(JSON.parse(req.body.body).title)
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send(JSON.stringify('No files were uploaded.'))
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.file

  // console.log("sampleFile:",sampleFile)
  uploadPath ='/media/tis-34/Data/js/React/tech-blog/client/public'+'/upload/' + sampleFile.name
  console.log({__dirname})
  filepath = uploadPath

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err)

    res.send(JSON.stringify('File uploaded!'))
  })

  let title = await JSON.parse(req.body.body).title
  let des = await JSON.parse(req.body.body).description
  let uid = await JSON.parse(req.body.body).uid


  mysqlconnection.query(
    `INSERT INTO blogs (title, description, url,uid) VALUES ("${title}","${des}","${sampleFile.name}","${uid}")`,
    (err) => {
      if (err) {
        console.log(err)
        throw err
      } else console.log('inserted')
    },
  )
})

// AddBlogRouter.get('/getimg', function (req, res) {
//     res.sendFile(filepath);
// })

module.exports = AddBlogRouter

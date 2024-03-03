const express = require('express')
const app = express()
const PORT = 3000
let data = require('./data')
const multer = require('multer')
const upload = multer()

app.use(express.static('./templates'))
app.set('view engine', 'ejs')
app.set('views', './templates')

app.get('/', (req, resp) => {
  return resp.render('index', { data: data })
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
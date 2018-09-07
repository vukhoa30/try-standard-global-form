var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(__dirname))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8000, () => console.log('listening on 8000'))
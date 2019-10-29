const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

app.get('/status', function (req, res) {
  res.send('Behold The MEVN Stack!')
})

app.listen(3000, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('listen:3000')
  }
})

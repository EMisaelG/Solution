const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

app.get('/s', (req, res) => {
  res.json({
    message: 'Behold The MEVN Stack!'
  })
})

const port = process.env.PORT || 8081

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

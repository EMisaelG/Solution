module.exports = (app) => {
  app.post('/register', function (req, res) {
    res.send({
    message: `Hola ${req.body.email}, Usuario Registrado!`
    })
  })
}

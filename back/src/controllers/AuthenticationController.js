module.exports = {
  register (req, res) {
    res.send({
      message: `Hola ${req.body.email}, Usuario Registrado!`
    })
  }
}

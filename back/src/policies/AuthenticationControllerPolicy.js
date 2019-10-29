const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Debes poner un email valido'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Tu contraseña debe tener: 1.- 1 mayuscula, 1 minuscula, 1 numero y debe ser mayor a 8 y menor a 32'
          })
          break
        default:
          res.status(400).send({
            error: 'Registro no valido'
          })
      }
    } else {
      next()
    }
  }
}

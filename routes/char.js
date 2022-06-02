const express = require('express')
const routes = express()

const CharController = require('../controllers/char')
const charController = new CharController()

routes.get('/', charController.getChar)
routes.post('/', charController.insertChar)
routes.put('/:id', charController.updateChar)
routes.delete('/:id', charController.deleteChar)

module.exports = routes

const { Char } = require('../models')

class CharController {
  async getChar(req, res, next) {
    try {
      const options = {}
      const chars = await Char.findAll(options)
      
      res.status(200).json({ data: chars })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async insertChar(req, res, next) {
    try {
      const { name, element } = req.body

      if (!name || !element) {
        throw new Error('name and element are required!')
      }
      
      const data = { name, element }
      const save = await Char.create(data)

      res.status(201).json({ data: save })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async updateChar(req, res, next) {
    try {
      const { id } = req.params
      const { name, element } = req.body

      if (!id) {
        return res.sendStatus(404)
      }

      if (!name || !element) {
        throw new Error('name and element are required!')
      }

      const data = { name, element }
      const options = {
        where: { id }
      }
      const update = await Char.update(data, options)
      
      res.status(200).json({ data: update })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async deleteChar(req, res, next) {
    try {
      const { id } = req.params

      if (!id) {
        return res.sendStatus(404)
      }

      const options = {
        where: { id }
      }
      await Char.destroy(options)

      res.sendStatus(204)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = CharController

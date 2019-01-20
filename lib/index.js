const express = require('express')
const router = express.Router()
const linker = require('./linker')

router.get('/api', (req, res, next) => {
  res.json({
    _links: {
      self: {
        href: linker(req)
      },
      products: {
        href: linker(req, '/products')
      }
    }
  })
})

module.exports = router

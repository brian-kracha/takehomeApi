const express = require('express')
const router = express.Router()
const db = require('../lib/db')

router.get('/products', (req, res, next) => {
  const products = db.products.findAll()
  res.json(products)
})

router.get('/products/:id', (req, res, next) => {
  const product = db.products.find(req.params.id)
  res.json(product)
})

router.post('/products', (req, res, next) => {
  const product = db.products.insert({
    subject: req.body.subject,
    body: req.body.body,

  })
  res.json(product)
})

router.patch('/products', (req, res, next) => {
  console.log('req.body', req.body)
  db.products.findAll(req.body.productIds).forEach(product => {
    commands[req.body.command](product, req.body)
  })
  res.status(200)
  res.send(db.products.findAll())
})

const commands = {

  delete (product, cmd) {
    db.products.delete(product.id)
  },

}

module.exports = router

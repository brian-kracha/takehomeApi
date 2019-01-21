const express = require('express')
const router = express.Router()
const db = require('../lib/db')

router.get('/products', (req, res, next) => {
  console.log('hello world');
  const products = db.products.findAll()
  res.json(products)
})

router.get('/products/:id', (req, res, next) => {
  const product = db.products.find(req.params.id)
  res.json(product)
})

router.post('/products', (req, res, next) => {
  const product = db.products.insert({
    name: req.body.name,
    price: req.body.price,
    code: req.body.code,
    creator: req.body.creator,
    last_modified: Date.now()/1000


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

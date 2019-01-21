const express = require('express')
const router = express.Router()
const db = require('../lib/db')

router.get('/products', (req, res, next) => {
  console.log('hello world');
  const products = db.products.findAll()
  res.json(products)
})

router.get('/products/:id', (req, res, next) => {
  const product = db.products.findByIdAndUpdate(req.params.id)

  console.log('product',db.products.data.id);
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

router.patch('/products/:id', (req, res, next) => {
  const product = db.products.find(req.params.id,req.params.price)

      product.price = req.body.price
      product.last_modified= Date.now()/1000
      res.json(product)
})

router.delete('/product/:id', (req, res) => {
  const product = db.products.find(req.params.id)
  if (product) {
    console.log(product)
    db.products.delete(req.params.id)
  }

  res.status(200)
  res.end()
})


const commands = {

  delete (product, cmd) {
    db.products.delete(product.id)
  },

}

module.exports = router

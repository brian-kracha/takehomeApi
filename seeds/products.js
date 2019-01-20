module.exports = db => {
const products = [
    {
      id : 1,
      name: 'Turtoise Frame',
      code: 'PW1689', price: 99.00, creator: 'Jon Snow', last_modified: 1538359384
    },
    {
      id: 2,
      name: 'Aviator Sunglasses', code: 'PW134E',
      price: 74.00,
      creator: 'Samwell Tarly', last_modified: 153316800
    },
    {
      id: 3, name: 'Igneous Matte', code: 'PW001Z', price: 64.00, creator: 'Arya Stark', last_modified: 1566604800
    }
  ]
  products.forEach(product => db.products.insert(product))
}

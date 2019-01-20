const Table = require('./table.js')

const db = {
  init() {
    //new products table
    this.products = new Table()
  }

}

db.init()
require('../seeds/products')(db)

module.exports = db

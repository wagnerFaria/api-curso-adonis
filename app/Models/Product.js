'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    static get connection() {
        return 'oldMysql'
    }

    static get table() {
        return 'products'
    }
}

module.exports = Product

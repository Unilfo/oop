const ItemInfo = require('./ItemInfo')
const Item = require('./Item')

class Drink extends ItemInfo{
    constructor(drink){
        super()
        if(!drink){
            throw new Error('Missing drink')
        }
        this.props = [new Item(drink)]
        this.price = drink.price
        this.calories = drink.calories
    }
    static DRINK_COLA = { name: 'cola', price: 50, calories: 40 }
    static DRINK_COFFEE = { name: 'coffee', price: 80, calories: 20 }
}

module.exports = Drink

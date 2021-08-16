const ItemInfo = require('./ItemInfo')
const Item = require('./Item')

class Drink extends ItemInfo{
    constructor(drink){
        super()
        if(!drink){
            throw new Error('Missing drink')
        }
        this.props= []
        this.props.push(new Item(drink)) 
    }
}

module.exports = Drink
const ItemInfo = require('./ItemInfo')
const Item = require('./Item')

class Salad extends ItemInfo{
    constructor(salad, weight){
        super()
        if(!salad){
            throw new Error('Missing salad')
        }
        this.weight = weight
        this.props= []
        this.props.push(new Item(salad))  
    }
}

module.exports = Salad

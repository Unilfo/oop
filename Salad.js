const ItemInfo = require('./ItemInfo')
const Item = require('./Item')

class Salad extends ItemInfo{
    constructor(salad, weight){
        super()
        if(!salad){
            throw new Error('Missing salad')
        }
        this.props= []
        this.props.push(new Item(salad))
        this.calories = weight > 100 ? (salad.calories / 100) * weight :  salad.calories
        this.price = weight > 100 ?  (salad.price / 100) * weight :   salad.price
    }
    static SALAD_CEZAR = { name: 'cezar', price: 100, calories: 20 }
    static SALAD_OLIVIE = { name: 'olivie', price: 50, calories: 80 }
}

module.exports = Salad

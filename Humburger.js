const ItemInfo =  require('./ItemInfo')
const Item =  require('./Item')

class Humburger extends ItemInfo{
    constructor(size, stuffing){
        super()
        if(!size || !stuffing){
            throw new Error('Missing size or stuffing')
        }

        this.size = size.name
        this.stuffing = stuffing.name
        this.props= []
        this.props.push(new Item(stuffing))
        this.props.push(new Item(size))
        this.price = size.price + stuffing.price
        this.calories = size.calories + stuffing.calories
    }
    static SIZE_SMALL = { name: 'small', price: 50, calories: 20 }
    static SIZE_LARGE = { name: 'large', price: 100, calories: 40 }
    static STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 }
    static STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 }
    static STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 }

    get getSize(){return this.size}
    get getStuffing(){return this.stuffing}
}

module.exports = Humburger

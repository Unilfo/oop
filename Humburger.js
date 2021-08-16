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
    }
    get getSize(){return this.size}
    get getStuffing(){return this.stuffing}
}

module.exports = Humburger
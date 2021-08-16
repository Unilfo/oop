class ItemInfo{
    get getCalories(){
        let calories = 0
        this.props.map(el => {
            this.weight > 100 ? calories += (el.calories / 100) * this.weight : calories += el.calories
        })
        return calories
    }
    get getPrice(){
        let price = 0
        this.props.map(el => {
            this.weight > 100 ? price += (el.price / 100) * this.weight : price += el.price
        })
        return price
    }
}

module.exports = ItemInfo
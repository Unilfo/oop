class Order {
    constructor() {
        this.items = []
        this.isPaid = 'no'  //prepare, paid, no
    }
    add(item) {
        this.isPaid === 'yes' ?  console.error('already paid') : this.items.push(item)
    }
    remove(ind) {
        this.isPaid === 'yes' ?  console.error('already paid') : this.items = this.items.filter((_, index) => index != ind)
    }
    pay() {
        this.isPaid = 'yes'
        console.log(`Pay`);
    }
    get getTotalCalories(){
        let totalCalories = 0
        this.items.map(el => totalCalories += el.getCalories)
        return totalCalories
    }
    get getTotalPrice(){
        let totalPrice = 0
        this.items.map(el => totalPrice += el.getPrice)
        return totalPrice
    }
}

module.exports = Order
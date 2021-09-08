class ItemInfo{
    constructor() {
        this.price = 0;
        this.calories = 0;
    }
    get getPrice() {
        return this.price;
    }
    get getCalories() {
        return this.calories;
    }
}

module.exports = ItemInfo

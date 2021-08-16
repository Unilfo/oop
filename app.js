const Humburger =  require('./Humburger')
const Drink =  require('./Drink')
const Salad =  require('./Salad')
const Order =  require('./Order')
const { 
    SIZE_SMALL, 
    SIZE_LARGE, 
    STUFFING_CHEESE,
    STUFFING_SALAD,
    STUFFING_POTATO,
    DRINK_COLA,
    DRINK_COFFEE,
    SALAD_CEZAR,
    SALAD_OLIVIE} = require('./db')

const h = new Humburger(SIZE_SMALL,STUFFING_CHEESE)
const h2 = new Humburger(SIZE_LARGE,STUFFING_POTATO)
const d = new Drink(DRINK_COLA)
const s = new Salad(SALAD_CEZAR, 200)
const order = new Order()
order.add(h)
order.add(h2)
// order.pay()
order.add(d)
console.log(h);
console.log(h.getSize);
console.log(h2.getPrice);
console.log(h.getStuffing);
console.log(d);
console.log(s);
order.add(s)
console.log(order);
console.log(order.getTotalPrice);
console.log(order.getTotalCalories);
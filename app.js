const Humburger =  require('./Humburger')
const Drink =  require('./Drink')
const Salad =  require('./Salad')
const Order =  require('./Order')


const h = new Humburger(Humburger.SIZE_SMALL,Humburger.STUFFING_CHEESE)
const h2 = new Humburger(Humburger.SIZE_LARGE,Humburger.STUFFING_POTATO)
const d = new Drink(Drink.DRINK_COLA)
const s = new Salad(Salad.SALAD_CEZAR, 100)
const order = new Order()
order.add(h)

order.add(h2)
// order.pay()
order.add(d)
// console.log(h);
// console.log(h.getSize);
// console.log(h.getPrice);
// console.log(h.getStuffing);
// console.log(d);
// console.log(s);
order.add(s)
// console.log(order);
console.log(order.getTotalPrice);
console.log(order.getTotalCalories);

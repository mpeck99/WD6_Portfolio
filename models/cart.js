module.exports = function Cart(oldCart) {
  this.items = oldCart.items;
  this.totalQty = oldCart.totalQty;
  this.totalPrice = oldCart.totalPrice;

  this.add = function (item,id) {
    var storedProduct = this.items[id];
    if (!storedProduct) {
      storedProduct = this.items[id] = {item:item, qty: 0, price: 0};
    }
    storedProduct.qty++;
    storedProduct.price = storedProduct.item.price * storedProduct.qty;
    this.totalQty++;
    this.totalPrice += storedProduct.price;
  };

  this.generateArray = function () {
    var arr = [];
    for (var id in this.items){
      arr.push(this.items[id]);
    }
    return arr;
  };
};
module.exports = function Cart(wishItem) {
  this.items = wishItem.items || {};
  this.totalQty = wishItem.totalQty || 0;
  this.price= wishItem.price || 0;

  this.add = function (item,id) {
    var storedProduct = this.items[id];
    if (!storedProduct) {
      storedProduct = this.items[id] = {item:item, qty: 0, price: 0};
    }
    storedProduct.qty++;
    //storedProduct.price = storedProduct.item.price * storedProduct.qty;
    this.totalQty++;
    //this.totalPrice += storedProduct.item.price;
  };
  };
  this.removeItem = function (id) {
    this.totalQty -= this.items[id].qty;
    // this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };
  this.generateArray = function () {
    var arr = [];
    for (var id in this.items){
      arr.push(this.items[id]);
    }
    return arr;
  };
};
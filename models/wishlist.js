module.exports = function Wishlist(wishItem) {
  this.items = wishItem.items || {};
  this.price= wishItem.price || 0;

  this.add = function (item,id) {
    var storedProduct = this.items[id];
    if (!storedProduct) {
      storedProduct = this.items[id] = {item:item};
    }
    //storedProduct.qty++;
    //storedProduct.price = storedProduct.item.price * storedProduct.qty;
    //this.totalQty++;
    //this.totalPrice += storedProduct.item.price;
  };
  this.removeItem = function (id) {
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
module.exports = function Cart(wishlist) {
  this.items = wishlist.items || {};
  this.totalQty = wishlist.totalQty || 0;
  this.totalPrice = wishlist.totalPrice || 0;
 // Adding items to a wishlist
  this.addWishItem = function(item, id) {
    var storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = {item: item, qty: 0, price: 0};
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  };
// Removing items from a wishlist
  this.removeWishItem = function(id) {
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };
// Creating the wishlist array
  this.generateWishArray = function() {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
const addTodb = (id) => {
  let shippingCart = {};
  const sortCart = localStorage.getItem("shopping-cart");
  if (sortCart) {
    shippingCart = JSON.parse(sortCart);
  }

  //    added data
  const quantitity = shippingCart[id];
  if (quantitity) {
    const newQuantity = quantitity + 1;
    shippingCart[id] = newQuantity;
  } else {
    shippingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shippingCart));
};

const getData = () => {
  const shoppingCart = {};
  const sortCart = localStorage.getItem("shopping-cart");
  if (sortCart) {
    shoppingCart = JSON.parse(sortCart);
  }
  return shoppingCart;
};
export { addTodb, getData };


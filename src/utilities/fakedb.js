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
  let shoppingCart = {};
  const sortCart = localStorage.getItem("shopping-cart");
  if (sortCart) {
    shoppingCart = JSON.parse(sortCart);
  }
  return shoppingCart;
};

  const removeItem = id => {
    const storeCart = localStorage.getItem("shopping-cart")
    if(storeCart){
     const shoppingCart = JSON.parse(storeCart);
     if(id in shoppingCart){
       delete shoppingCart[id]
       localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))
     }
    }
  }
  const removeShoppingCart = () =>{
    localStorage.removeItem("shopping-cart")
  }
export { addTodb, getData, removeItem, removeShoppingCart };


import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useproduct";
import { removeItem, removeShoppingCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Preview from "../Preview/Preview";
import './overview.css';
const OrderPreview = () => {
  const [products] = useProduct();
  const [cart,setCart] = useCart();
  const deleteItem = (product) => {
    const rest = cart.filter(pd => pd._id !== product._id)
    setCart(rest)
    removeItem(product._id)
  }
 
  return (
    <div className="product-container">
      <div className="review-items-container">
          {
              cart.map(product => <Preview key={product._id} product = {product} deleteItem={deleteItem}></Preview>)
          }
      </div>
      <div className="order">
        <Cart cart={cart}>
          <button onClick={()=> removeShoppingCart()}>Remove cart</button>
          <Link to='/shipment'>
            <button>preview shipment</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderPreview;

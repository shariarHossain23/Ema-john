import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useproduct';
import { addTodb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';


const Shop = () => {
    const [products,setProducts] = useProduct();
    const [cart,setCart] = useCart(products)
   const addToCart = (selectProduct) => {
       let newCart = [];
       const exist = cart.find(product => product.id === selectProduct.id);
       if(!exist){
           selectProduct.quantity = 1;
           newCart =[...cart,selectProduct]
       }
       else{
           const res = cart.filter(product => product.id !== selectProduct.id);
           exist.quantity= exist.quantity + 1;
           newCart = [...res,exist]
       }
       setCart(newCart)
       addTodb(selectProduct.id)
}
    return (
        <div className='product-container'>
            <div className='shop-container'>
                <div className='shop'>
                    {
                        products.map(product => <Product product ={product} key={product.id} addToCart ={addToCart}></Product>)
                    }
                </div>
            </div>
            <div className='order'>
               <Cart cart = {cart}>
                    <Link to='/order-preview'>
                        <button>Review order</button>
                    </Link>
               </Cart>
            </div>
          
        </div>

    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import { addTodb, getData } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);
   useEffect(()=>{
       const storeCart = getData();
       const saveProduct = []
        for (const id in storeCart) {
            const addedCart = products.find(product => product.id === id);
            if(addedCart){
                const quantity = storeCart[id];
                addedCart.quantity = quantity;
                saveProduct.push(addedCart)
            }
        }
        setCart(saveProduct)
   },[products])
    
   const addToCart = (product) => {
       const newCart = [...cart,product]
       setCart(newCart)
       addTodb(product.id)
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
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
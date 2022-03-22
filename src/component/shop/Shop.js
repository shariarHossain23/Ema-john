import React, { useEffect, useState } from 'react';
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
   const addToCart = (product) => {
       const newCart = [...cart,product]
       setCart(newCart)
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
                <h1>Order Summary</h1>
                <p>cart length := {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
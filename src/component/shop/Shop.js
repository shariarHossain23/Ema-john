import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);
   const addToCart = () => {
       console.log("clicked btn")
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
                <h1>Order</h1>
            </div>
        </div>
    );
};

export default Shop;
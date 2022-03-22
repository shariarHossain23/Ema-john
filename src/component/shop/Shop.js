import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className='product-container'>
            <div className='shop'>
                <div>
                    {
                        products.map(product => console.log(product))
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
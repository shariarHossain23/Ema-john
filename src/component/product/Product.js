import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {img,name,seller,price,product} = props.product
    return (
        <div>
            <div className='product'>
                <div className='product-img'>
                <img src={img} alt = ""/>
                </div>
               <div className='product-text'>
               <h2>{name}</h2>
               </div>

            </div>
        </div>
    );
};

export default Product;
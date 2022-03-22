import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {img,name,seller,price,ratings} = props.product
    return (
        <div>
            <div className='product'>
                <img src={img} alt = ""/>
               <div className='product-text'>
               <p className='product-name'>Name:{name}</p>
               <p>Price: ${price}</p>
               <p><small>Manufacturer :{seller}</small></p>
               <p><small>Rating: {ratings}</small></p>
               </div>
               <button className='btn-cart'>Add To Cart</button>
</div>
        </div>
    );
};

export default Product;
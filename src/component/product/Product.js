import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
               <button className='btn-cart'>
                   <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
               </button>
</div>
        </div>
    );
};

export default Product;
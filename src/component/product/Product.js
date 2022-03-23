import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product,addToCart}) => {
    const {img,name,seller,price,ratings} = product
    return (
        <div>
            <div className='product'
           data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="2000"
            >
                <img src={img} alt = ""/>
               <div className='product-text'>
               <p className='product-name'>Name:{name}</p>
               <p>Price: ${price}</p>
               <p><small>Manufacturer :{seller}</small></p>
               <p><small>Rating: {ratings}</small></p>
               </div>
               <button onClick={()=> addToCart(product)} className='btn-cart'>
                   <p>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
               </button>
</div>
        </div>
    );
};

export default Product;
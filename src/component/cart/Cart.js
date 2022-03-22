import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let Tax = 0;
    let grandTotal = 0;
    for (const product of cart) {
        totalPrice += product.price
        totalShipping += product.shipping
        Tax = parseFloat(Tax + product.price * 0.1)
        grandTotal = totalPrice + totalShipping + Tax;
    }
    console.log(totalPrice)
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Total Price:${totalPrice}</p>
            <p>shipping Charge:${totalShipping}</p>
            <p>Tax : ${Tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
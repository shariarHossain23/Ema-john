import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props
    let totalPrice = 0;
    let totalShipping = 0;
    let quantitity = 0;
    for (const product of cart) {
        quantitity += product.quantity
        totalPrice += product.price * quantitity
        totalShipping += product.shipping * quantitity
    }
    const Tax = parseFloat( totalPrice * 0.1);
    const grandTotal = totalPrice + totalShipping + Tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>quantity: {quantitity}</p>
            <p>Total Price:${totalPrice}</p>
            <p>shipping Charge:${totalShipping}</p>
            <p>Tax : ${Tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;
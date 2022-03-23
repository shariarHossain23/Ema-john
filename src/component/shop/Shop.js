import React, { useEffect, useState } from 'react';
import { addTodb, getData } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect( () =>{
        fetch('./products.json')
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
   const addToCart = (selectProduct) => {
       let newCart = [];
       const exist = cart.find(product => product.id === selectProduct.id);
       if(!exist){
           selectProduct.quantity = 1;
           newCart =[...cart,selectProduct]
       }
       else{
           const res = cart.filter(product => product.id !== selectProduct.id);
           exist.quantity= exist.quantity + 1;
           newCart = [...res,exist]
       }
       setCart(newCart)
       addTodb(selectProduct.id)
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
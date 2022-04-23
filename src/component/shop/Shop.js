import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addTodb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useCart()
    const [pageCount,setPageCount] = useState(0)
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(10)
   
    useEffect(() => {
      fetch(`http://localhost:4000/products?page=${page}&size=${size}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [page,size]);
    useEffect(()=>{
        fetch("http://localhost:4000/pageCount")
        .then(res=>res.json())
        .then(data=>{
            const count = data.count
            const page = Math.ceil(count/10)
            setPageCount(page)
        })
    },[])


    
   const addToCart = (selectProduct) => {
       let newCart = [];
       const exist = cart.find(product => product._id === selectProduct._id);
       if(!exist){
           selectProduct.quantity = 1;
           newCart =[...cart,selectProduct]
       }
       else{
           const res = cart.filter(product => product._id !== selectProduct._id);
           exist.quantity= exist.quantity + 1;
           newCart = [...res,exist]
       }
       setCart(newCart)
       addTodb(selectProduct._id)
}
    return (
        <div>
        <div className='product-container'>
            <div className='shop-container'>
                <div className='shop'>
                    {
                        products.map(product => <Product product ={product} key={product._id} addToCart ={addToCart}></Product>)
                    }
                </div>
            </div>
            <div className='order'>
               <Cart cart = {cart}>
                    <Link to='/order-preview'>
                        <button>Review order</button>
                    </Link>
               </Cart>
            </div>
          
        </div>
        <div className='pagination'>
        {
                    [...Array(pageCount).keys()].map(number =>
                        <button className={page === number ?"selected":""} onClick={()=> setPage(number)}>{number + 1}</button>
                    )
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
        </div>
        
    </div>

    );
};

export default Shop;
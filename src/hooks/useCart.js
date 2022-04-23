import { useEffect, useState } from "react";
import { getData } from "../utilities/fakedb";
const useCart = () => {
   const [cart,setCart] = useState([]);
   useEffect(()=>{
       const storeCart = getData()
       let newProduct = [];
       const keys = Object.keys(storeCart)
       console.log(keys);

       
       fetch("http://localhost:4000/productsBykeys",{
         method: "POST",
         headers:{
          'content-type':'application/json'
         },
         body:JSON.stringify(keys)
       })
       .then(res => res.json())
       .then(products =>{
          for (const id in storeCart) {
         const addedCart = products.find(product => product._id === id)
         if(addedCart){
           const quantity = storeCart[id];
           addedCart.quantity = quantity;
           newProduct.push(addedCart)
         }
       }
       setCart(newProduct);
         
       })
      
   },[])
   return [cart,setCart]
}
export default useCart


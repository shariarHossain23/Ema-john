import { useEffect, useState } from "react";
import { getData } from "../utilities/fakedb";
const useCart = products => {
   const [cart,setCart] = useState([]);
   useEffect(()=>{
       const storeCart = getData()
       let newProduct = [];
       for (const id in storeCart) {
         const addedCart = products.find(product => product.id === id)
         if(addedCart){
           const quantity = storeCart[id];
           addedCart.quantity = quantity;
           newProduct.push(addedCart)
         }
       }
       setCart(newProduct);
   },[products])
   return [cart,setCart]
}
export default useCart


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Inventory from './component/inventory/Inventory';
import Login from './component/Login/Login';
import OrderPreview from './component/order/OrderPreview';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Shipment from './component/Shipment/Shipment';
import Shop from './component/shop/Shop';
import Signup from './component/SIgnup/Signup';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Toaster></Toaster>
     <Header></Header>
    <Routes>
      <Route path='/' element ={<Shop></Shop>}/>
      <Route path='/order' element={<Shop></Shop>}></Route>
      <Route path ='/order-preview' element={<OrderPreview></OrderPreview>}></Route>
      <Route path='/inventory' element={
        <RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>
      }></Route>
      <Route path='/shipment'element={
        <RequireAuth>
          <Shipment></Shipment>
        </RequireAuth>
      }></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/signup'element={<Signup></Signup>}></Route>
    </Routes>
    </div>
  );
}

export default App;
